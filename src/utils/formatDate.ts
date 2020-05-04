const formatDate = (pdata: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(pdata));

export default formatDate;
