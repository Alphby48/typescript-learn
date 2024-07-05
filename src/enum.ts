export enum customerType {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
}

export type customer = {
  id: number;
  nama: string;
  customertype: customerType;
};
