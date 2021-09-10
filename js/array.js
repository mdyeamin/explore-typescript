"use strict";
const salary = 7500;
const freindSalary = [10100, 9700, 8000, 12100, 6100];
freindSalary[4] = 13100;
let max = 0;
for (const salary of freindSalary) {
    if (salary > max) {
        max = salary;
    }
}
