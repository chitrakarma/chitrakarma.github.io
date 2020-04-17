# Student Database Console Application

# Tools class contains a set of tools used for conversion and processing of the working data


class Tools:
    def toString(self, data):
        str1 = ''

        for i in data:
            str1 += i

        return str1

    def process(self, data):
        pData = []
        temp = data[0]
        for i in range(len(data[0]), 8):
            temp += ' '

        pData.append(temp)

        temp = data[1]
        for i in range(len(data[1]), 28):
            temp += ' '

        pData.append(temp)

        temp = data[2]
        for i in range(len(data[2]), 8):
            temp += ' '

        pData.append(temp)

        temp = data[3]
        for i in range(len(data[3]), 12):
            temp += ' '

        pData.append(temp)

        temp = data[4]
        for i in range(len(data[4]), 5):
            temp += ' '
        pData.append(temp)

        return pData

# StudentDatabase class is the main class of the program


class StudentDatabase:

    def addNewStudent(self):
        print("You are in add new student secton")
        fields = ["ID", "Full Name", "Age", "Branch", "Grade"]
        data = []
        for i in fields:
            print("Enter the " + i)
            data.append(input())

        pData = Tools.process(self, data)

        print(pData)

        try:
            f = open("Database.txt", mode='a+')
            f.write('\n')
            for i in pData:
                f.write(i)
        finally:
            f.close()

        print("This section is under construction")

    def viewAllStudents(self):
        try:
            # Open File in read Mode
            f = open("Database.txt", mode='r', encoding='cp1252')

            # If mode is set to read mode then read and display all contents of the file
            if f.mode == 'r':
                contents = f.read()
                print(contents)
        finally:
            f.close()

    def viewExistingStudent(self):
        print("Enter id of the student you're looking for")
        id = input()
        try:
            f = open("Database.txt", mode='r', encoding='cp1252')
            fields = ["ID", "Full Name", "Age", "Branch", "Grade"]
            fields = Tools.process(self, fields)
            print(Tools.toString(self, fields))
            if f.mode == 'r':
                for x in f.readlines():
                    if id in x:
                        print(x)
                        break
        finally:
            f.close()

    def updateStudentData(self):
        print("You are in update student secton")
        print("This section is under construction")

    def deleteStudent(self):
        print("You are in delete student secton")
        print("This section is under construction")

    def welcomeMenu(self):
        print("Welcome to Student Database Application")
        print("1. Add New Student")
        print("2. View Existing Student")
        print("3. View All Students")
        print("4. Update Student Data")
        print("5. Delete Student Record")
        print("6. Exit")

        print("Your choice (1 - 6) : ")

        choice = int(input())

        if (choice == 1):
            self.addNewStudent()
        elif (choice == 2):
            self.viewExistingStudent()
        elif (choice == 3):
            self.viewAllStudents()
        elif (choice == 4):
            self.updateStudentData()
        elif (choice == 5):
            self.updateStudentData()
        else:
            print("Invalid Choice, aborting further operations!")
            exit()


if __name__ == "__main__":
    s = StudentDatabase()
    s.welcomeMenu()
