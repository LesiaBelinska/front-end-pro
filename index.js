"use strict";

function Student(name, surname, yearOfBirth) {
  this.name = name;
  this.surname = surname;
  this.yearOfBirth = yearOfBirth;
  this.grades = [];
  this.attendance = [];

    this.getAverageGrade = function () {
        if (this.grades.length === 0) return 0;

        const total = this.grades.reduce((acc, grade) => acc + grade, 0);

        return total / this.grades.length;
    };

    this.getAge = function () {
        const nowDate = new Date();
        const currentYear = nowDate.getFullYear();

        return currentYear - this.yearOfBirth;
    };

    this.present = function () {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        }
    };

    this.absent = function () {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        }
    };

    this.addGrade = function (grade) {
        this.grades.push(grade);
    };

    this.getSummary = function () {
        const averageGrade = this.getAverageGrade();
        const presentAttendanceCount = this.attendance.filter(
            (value) => value === true
        ).length;
        const averageAttendance = presentAttendanceCount / this.attendance.length;

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return `Молодець!`;
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };

    this.showSummary = function () {
        console.log(`Студент: ${this.name} ${this.surname}`);
        console.log(`Вік: ${this.getAge()}`);
        console.log(`Середня оцінка: ${this.getAverageGrade()}`);
        console.log(`Підсумок: ${this.getSummary()}`);
        console.log("*****");
    };
}

const Kate = new Student("Kate", "Adams", 2000);
const Jack = new Student("Jack", "Barch", 1998);
const Ann = new Student("Ann", "Bruks", 2002);

Kate.absent();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.present();
Kate.addGrade(100);
Kate.addGrade(92);
Kate.showSummary();


Jack.absent();
Jack.present();
Jack.absent();
Jack.absent();
Jack.absent();
Jack.present();
Jack.absent();
Jack.absent();
Jack.present();
Jack.absent();
Jack.present();
Jack.addGrade(76);
Jack.addGrade(66);
Jack.showSummary();


Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.present();
Ann.absent();
Ann.addGrade(90);
Ann.addGrade(76);
Ann.showSummary();