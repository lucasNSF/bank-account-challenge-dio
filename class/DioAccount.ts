export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit(value: number): void {
    this.validateStatus();
    this.setBalance(value);
    console.log(
      `Você realizou um depósito no valor de R$${value
        .toFixed(2)
        .replace(".", ",")}.`
    );
    console.log(
      `Saldo total = R$${this.balance.toFixed(2).replace(".", ",")}.`
    );
  }

  withdraw = (value: number): void => {
    if (value >= 0 && value <= this.getBalance()) {
      this.balance -= value;
      console.log(`Você sacou R$${value.toFixed(2).replace(".", ",")}.`);
      console.log(
        `Saldo restante: R$${this.balance.toFixed(2).replace(".", ",")}.`
      );
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (value: number): void => {
    if (value >= 0) {
      this.balance += value;
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
