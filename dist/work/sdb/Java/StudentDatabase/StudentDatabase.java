// Student Database Project 

import java.util.Scanner;

public class StudentDatabase {
    Scanner in = new Scanner(System.in);

    public void addNewStudent() {
        System.out.println("\nYou are in the add new student section");
        System.out.println("This section is under construction");
    }

    public void viewExistingStudent() {
        System.out.println("\nYou are in the view existing student section");
        System.out.println("This section is under construction");
    }

    public void viewAllStudents() {
        System.out.println("\nYou are in the view all students section");
        System.out.println("This section is under construction");
    }

    public void updateStudentData() {
        System.out.println("\nYou are in the update student data section");
        System.out.println("This section is under construction");
    }

    public void deleteStudent() {
        System.out.println("\nYou are in the delete student section");
        System.out.println("This section is under construction");
    }

    public void welcomeMenu() {

        System.out.println("Welcome to Student Database!");
        System.out.println("1. Add New Student");
        System.out.println("2. View Existing Student");
        System.out.println("3. View All Students");
        System.out.println("4. Update Student Data");
        System.out.println("5. Delete Student");
        System.out.println("6. Exit");
        System.out.print("Your Choice (1-6) : ");

        int choice = in.nextInt();

        switch (choice) {
            case 1:
                addNewStudent();
                break;
            case 2:
                viewExistingStudent();
                break;
            case 3:
                viewAllStudents();
                break;
            case 4:
                updateStudentData();
                break;
            case 5:
                deleteStudent();
                break;
            case 6:
                System.exit(1);
                break;
            default:
                System.out.println("Invalid Choice, aborting further operations!");
                System.exit(0);
                break;
        }
    }

    public static void main(String args[]) {
        StudentDatabase welcome = new StudentDatabase();
        welcome.welcomeMenu();
    }
}