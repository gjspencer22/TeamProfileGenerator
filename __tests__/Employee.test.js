const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");



test('Employee name and ID format', () => {
  const employee = new Employee("Ted", 1234, "Ted1234@email.com");

  expect(employee.name).toEqual(expect.any(String));

  expect(employee.id).toEqual(expect.any(Number));

});


test('Name', () => {
  const testName = "Ted";

  const employee = new Employee (testName, 1234, "Ted1234@email.com");
  expect (employee.name).toBe(testName);

});

test('ID', () => {
  const testID = "1234";

  const employee1 = new Employee("Ted", testID, "Ted1234@email.com");
  expect (employee.ID).toBe(testID);
})









// const Enemy = require('../lib/Enemy.js');
// const Potion = require('../lib/Potion.js');

// jest.mock('../lib/Potion.js');

// test('creates an enemy object', () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.name).toBe('goblin');
//   expect(enemy.weapon).toBe('sword');
//   expect(enemy.health).toEqual(expect.any(Number));
//   expect(enemy.strength).toEqual(expect.any(Number));
//   expect(enemy.agility).toEqual(expect.any(Number));
//   expect(enemy.potion).toEqual(expect.any(Object));
// });

// test("gets enemy's health value", () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
// });

// test('gets a description of the enemy', () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.getDescription()).toEqual(expect.stringContaining('goblin'));
//   expect(enemy.getDescription()).toEqual(expect.stringContaining('sword'));
// });

// test('checks if enemy is alive or not', () => {
//   const enemy = new Enemy('goblin', 'sword');

//   expect(enemy.isAlive()).toBeTruthy();

//   enemy.health = 0;

//   expect(enemy.isAlive()).toBeFalsy();
// });

// test("gets enemy's attack value", () => {
//   const enemy = new Enemy('goblin', 'sword');
//   enemy.strength = 10;

//   expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
//   expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
// });

// test("subtracts from enemy's health", () => {
//   const enemy = new Enemy('goblin', 'sword');
//   const oldHealth = enemy.health;

//   enemy.reduceHealth(5);

//   expect(enemy.health).toBe(oldHealth - 5);

//   enemy.reduceHealth(99999);

//   expect(enemy.health).toBe(0);
// });
