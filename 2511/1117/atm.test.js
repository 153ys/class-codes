// 領錢功能
// - 領錢功能
// - 不可以存0元或是小於0元的金額(越存錢越少)

// 領錢功能
// - 可以領錢
// - 不能領0元或是小於0元的金額(越領錢越多)
// - 不能領超過本身金額

class ATM {
  constructor(money) {
    this.value = money;
  }

  withdraw(amount) {
    if (amount == 0) {
      throw "金額不得為 0";
    }
    if (amount < 0) {
      throw "金額不得為負值";
    }
    if (amount > this.value) {
      throw "餘額不足";
    }

    this.value = this.value - amount;
    return amount;
  }

  balance() {
    return this.value;
  }

  deposit(bonus) {
    if (bonus == 0) {
      throw "金額不得為 0";
    }
    if (bonus < 0) {
      throw "金額不得為負值";
    }

    this.value = this.value + bonus;
  }
}

test("可以存錢", () => {
  // 3A = Arrange, Act, Assert
  // 1. 建立ATM
  const atm = new ATM(10);
  // 2. 存錢
  atm.deposit(5);
  // 3. 看餘額
  expect(atm.balance()).toBe(15);
});

it("不可以存0元", () => {
  const atm = new ATM(100);

  expect(() => {
    atm.deposit(0);
  }).toThrow("金額不得為 0");

  expect(() => {
    atm.deposit(-2);
  }).toThrow("金額不得為負值");
});

describe("領錢功能", () => {
  it("可以存錢", () => {
    const atm = new ATM(100);

    const amount = atm.withdraw(3);

    expect(amount).toBe(3);
    expect(atm.balance()).toBe(97);
  });
});

it("不能領 0 元或是負的金額", () => {
  const atm = new ATM(100);
  expect(() => {
    atm.withdraw(0);
  }).toThrow("金額不得為 0");
  expect(() => {
    atm.withdraw(-5);
  }).toThrow("金額不得為負");
});

it("不能領超過本身餘額", () => {
  const atm = new ATM(100);
  expect(() => {
    atm.withdraw(150);
  }).toThrow("餘額不足");
});
