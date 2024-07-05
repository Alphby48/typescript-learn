export type kategori = {
  id: string;
  nama: string;
};

export type pro = {
  categori: kategori;
};

// type alias union

export type ID = string | number;
export type data = {
  id: ID;
  nama: string;
};

// optional properties

export type sub = {
  id: ID;
  nama: string;
  description?: string;
};
