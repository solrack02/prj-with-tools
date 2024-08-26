
export type Titems = [
  {
    amount: number;
    description: string;
    quantity: number;
    code: number;
  },
];

export type Tcustomer = {
  name: string;
  type: string;
  email: string;
  document: string;
  document_type: string;
};

export type TpayOptions = 'credit_card';

export type TPayments = [
  {
    payment_method: TpayOptions;
    credit_card: {
      recurrence: boolean;
      installments: number;

      card: {
        number: string; // Entre 13 e 19 caracteres
        holder_name: string; // M�ximo de 64 caracteres (Caracteres especiais e n�meros n�o s�o aceitos)
        holder_document?: string; // CPF ou CNPJ do portador do cart�o. Obrigat�rio caso o tipo do cart�o seja voucher (bandeiras VR ou Sodexo).
        exp_month: number; // M�s de validade do cart�o. Valor entre 1 e 12 (inclusive)
        exp_year: number; // Ano de validade do cart�o. Formatos yy ou yyyy. Ex: 23 ou 2023.
        cvv: string; // C�digo de seguran�a do cart�o. O campo aceita 4 ou 3 caracteres, variando por bandeira.

        // (Opcional) Bandeira do cart�o. Para cart�es de cr�dito, temos como valores poss�veis: Elo, Mastercard, Visa, Amex, ou Hipercard. Para voucher, temos como valores poss�veis: Alelo, Ticket, VR ou Sodexo.
        // brand?: string;
        // label?: string; // Indica a label do cart�o

        billing_address: {
          line_1: string; // Linha 1 do endere�o. (N�mero, Rua, e Bairro - Nesta ordem e separados por v�rgula) Max: 256 caracteres.

          zip_code: string; // CEP. Max: 16 caracteres.
          city: string; // Cidade. Max: 64 caracteres.
          state: string; // C�digo do estado no formato ISO 3166-2.
          country: string; //C�digo do pa�s no formato ISO 3166-1 alpha-2.
        };
      };
    };
  },
];

// ---------- Required;

export type Torder = {
  items: Titems;
  customer?: Tcustomer;
  customer_id: string;

  payments: TPayments;
};

