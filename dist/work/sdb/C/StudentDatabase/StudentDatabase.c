// Student Database Application

// Required Header Files
#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

// Function Prototypes
void addNewStudent();
void viewExistingStudent();
void viewAllStudents();
void updateStudentData();
void deleteStudent();

// Welcome Menu Function
void welcomeMenu(){
    int choice = 0;

    printf("Welcome to the Student Data Application\n");
    printf("1. Add New Student\n");
    printf("2. View Existing Student\n");
    printf("3. Update Student Data\n");
    printf("4. View All Students\n");
    printf("5. Delete Student Record\n");
    printf("6. Exit\n");
    printf("Your choice (1 - 6) : ");

    scanf("%d", &choice);

    switch(choice){
        case 1:
            addNewStudent();
            break;
        case 2:
            viewExistingStudent();
            break;
        case 3:
            updateStudentData();
            break;
        case 4:
            viewAllStudents();
            break;
        case 5:
            deleteStudent();
            break;
        case 6:
            exit(0);
            break;
        default:
            printf("\nInvalid choice, aborting further operations!");
            exit(0);
            break;
    }
}

int main(){
    welcomeMenu();
    return 0;
}

void addNewStudent(){
    printf("\nThis is the add new student section\n");
    printf("This section is under construction\n");
}

void updateStudentData(){
    printf("\nThis is the update student section\n");
    printf("This section is under construction\n");
}

void viewAllStudents(){
    printf("\nThis is the view all students section\n");
    printf("This section is under construction\n");
}

void viewExistingStudent(){
    printf("\nThis is the view existing student section\n");
    printf("This section is under construction\n");
}

void deleteStudent(){
    printf("\nThis is the delete student data section\n");
    printf("This section is under construction\n");
}
