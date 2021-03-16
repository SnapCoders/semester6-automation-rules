import Candy from '../models/candy';
import Money from '../models/money';
import VendorMachineImp from '../models/vendor-machine';

export class VendorMachine implements VendorMachineImp {
  private money: number;
  
  constructor(
    private readonly candies: Candy[], 
    private readonly moneys: Money[]
    ) {
      this.candies = candies
      this.moneys = moneys
      this.money = 0
    }

  handle (candySelected: Candy, moneySelected: Money): string {
    if(!this.candies.includes(candySelected) ||!this.moneys.includes(moneySelected)) {
      return "Valores digitados incorretamente";
    }

    this.money =+ moneySelected.value;

    if (candySelected.price === this.money) {
      this.money = 0
      return `Parabéns! Você acabou de adquirir o doce ${candySelected.label}, você não possui troco!`
    }

    else if (this.money > candySelected.price) {
      let moneyBack = this.money - candySelected.price
      this.money = 0
      return `Parabéns! Você acabou de adquirir o doce ${candySelected.label}, seu troco é R$: ${moneyBack}`
    }

    return "Dinheiro insuficiente! Continue inserindo dinheiro."
  }
}