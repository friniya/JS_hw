
  
 function processCompany(company) {
  console.log(`Назва: ${company.name}, Тип: ${company.type}, Використовує: ${company.uses || 'N/A'}, Продає: ${company.sells || 'N/A'}`);

  if (company.partners) {
      company.partners.forEach(partner => processCompany(partner));
  }
}

const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
      {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
              {
                  name: 'Клієнт 1.1',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
              },
              {
                  name: 'Клієнт 1.2',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                  partners: [
                      {
                          name: 'Клієнт 1.2.3',
                          type: 'subSubCompany',
                          uses: 'Рішення для продажу квитків',
                          sells: 'Рішення для продажу квитків',
                      }
                  ]
              }
          ]
      },
      {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків'
      }
  ]
};

company.clients.forEach(client => processCompany(client));
