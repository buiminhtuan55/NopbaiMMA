import { Ionicons } from "@expo/vector-icons"; // chỉ thêm icon cho camera
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBackground}></View>

            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: "https://images2.thanhnien.vn/528068263637045248/2025/5/26/edit-48427799012203294996640565770072566130465660n-174827854706467715024.jpeg" }}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.cameraIcon}>
                    <Ionicons name="camera" size={18} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.name}>Jack - J97</Text>
                <Text style={styles.subText}>(BM SE)</Text>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/20.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>My Profile</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/21.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Settings</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/3.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Support</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/2.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>FAQ</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/1.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Admin</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require("../../assets/images/4.png")}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Logout</Text>
                    <Text style={styles.arrow}>›</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footer}>
                myFPT Version 5.9.19 {"\n"}Copyright @ FPT Software 2021
            </Text>
        </ScrollView>
    );
};

export default Profile;
