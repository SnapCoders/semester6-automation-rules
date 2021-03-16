import Candy from '../models/candy';
import Money from '../models/money';

export default interface VendorMachineImp {
  handle (candySelected: Candy, moneySelected: Money): string
}
