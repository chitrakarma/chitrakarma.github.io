// Student Database Application

#include<iostream>
#include<conio.h>
#include<fstream>
#include<stdlib.h>
#include<string.h>

using namespace std;

class Tools {
    public:
        void processData(char c[], int a[], int i){
            // ID - 8
            // Full Name - 28
            // Age - 8
            // Branch - 12
            // Grade - 5
        }
};

class StudentDatabase{
    private:
        char c[5][28] = {"ID","Full Name", "Age", "Branch", "Grade"};
        int a[5];
    public:
        void addNewStudent(){
            // testing methods
            // initializing array
            for(int i = 0; i < 5; i++){
                a[i] = 0;
            }

            // creating object of class Tools
            Tools t;

            // calculateLength method
            t.calculateLength(c[0], a, 0);

            // output the array of lengths
            for(int i = 0; i < 5; i++){
                printf("%d ", a[i]);
            }
            cout<<endl;
            cout<<"You are in add new student section\n";
            cout<<"This section is under construction\n";
        }

        void viewExistingStudent(){
            cout<<endl;
            cout<<"You are in view existing student section\n";
            cout<<"This section is under construction\n";
        }

        void viewAllStudents(){
            cout<<endl;
            cout<<"You are in view all students section\n";

            // input file stream
            ifstream inFile;
            inFile.open("Database.txt");

            // error check
            if(!inFile){
                cerr<<"Unable to open file Database.txt";
                _Exit(1);
            }
            string line;

            // reading file while its open and hasn't reached EOF
            if(inFile.is_open()){
                while(getline(inFile, line)){
                    cout<<line<<'\n';
                }
                inFile.close();
            }
        }

        void updateStudentData(){
            cout<<endl;
            cout<<"You are in update student data section\n";
            cout<<"This section is under construction\n";
        }

        void deleteStudent(){
            cout<<endl;
            cout<<"You are in delete student section\n";
            cout<<"This section is under construction\n";
        }

        void welcomeMenu(){
            int choice = 0;

            cout<<"Welcome to the Student Database Application\n";
            cout<<"1. Add New User\n";
            cout<<"2. View Existing Student\n";
            cout<<"3. View All Students\n";
            cout<<"4. Update Student Data\n";
            cout<<"5. Delete Student\n";
            cout<<"6. Exit\n";
            cout<<"Your choice (1-6) : ";
            cin>>choice;

            switch(choice){
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
                    _Exit(0);
                    break;
                default:
                    cout<<"Invalid choice, aborting further operations!";
                    _Exit(0);
                    break;
            }
        }
};

int main(){
    StudentDatabase s;
    s.welcomeMenu();
    _getch();
}
