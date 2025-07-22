import { AppState } from "@/src/store";
import { addTask, completeTask, removeTask } from "@/src/store/actions/taskActions";
import { Task, TaskActionsTypes } from "@/src/store/types/taskTypes";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const TaskScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch: Dispatch<TaskActionsTypes> = useDispatch();
    const tasks = useSelector((state: AppState) => state.task.tasks);

    const handleAddTask = () => {
        if (title.trim()) {
            const newTask: Task = {
                id: Date.now().toString(),
                title,
                description,
                isCompleted: false,
            };
            dispatch(addTask(newTask));
            setTitle("");
            setDescription("");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Task Manager</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle}
                    placeholderTextColor="#999"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    placeholderTextColor="#999"
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Text style={styles.addButtonText}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskCard}>
                        <Text style={styles.taskTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.taskDescription}>{item.description}</Text>
                        <Text style={{ color: item.isCompleted ? "green" : "gray" }}>
                            {item.isCompleted ? "Completed" : "Pending"}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
                            <TouchableOpacity style={styles.completeButton} onPress={() => dispatch(completeTask(item.id))}>
                                <Text style={styles.completeButtonText}>
                                    {item.isCompleted ? "Undo" : "Mark Complete"}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.removeButton} onPress={() => dispatch(removeTask(item.id))}>
                                <Text style={styles.removeButtonText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ced4da",
        borderRadius: 5,
        padding: 12,
        marginBottom: 10,
        fontSize: 18,
        color: "#212529",
    },
    addButton: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    list: {
        paddingBottom: 100,
    },
    taskCard: {
        backgroundColor: "#ffffff",
        borderRadius: 6,
        padding: 15,
        marginBottom: 12,
        borderColor: "#dee2e6",
        borderWidth: 1,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#212529",
    },
    taskDescription: {
        fontSize: 14,
        color: "#6c757d",
        marginVertical: 4,
    },
    completeButton: {
        backgroundColor: "#28a745",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
    },
    completeButtonText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 14,
    },
    removeButton: {
        backgroundColor: "#dc3545",
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
    },
    removeButtonText: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 14,
    },
});

export default TaskScreen;