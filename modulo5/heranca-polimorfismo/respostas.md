### Herança:
## Exercício 1:

a) Seria possivel imprimir a senha dessa instância se um método getter fosse criado para ela, pois ela é uma propriedade privada.
b) A mensagem foi impressa uma vez, pois o construtor só é chamado uma vez por instância.

## Exercício 2:

a) A mensagem foi impressa uma vez, pois o construtor foi chamado apenas uma vez pela instância criada.
b) Essa mensagem foi impressa uma vez também, porque como ela é mãe da classe Customer, o construtor dela também foi chamado.

## Exercício 3:

a) Como a classe Customer é filha da classe User, e a senha dessa classe é privada, para podermos imprimir ela por meio da instância criada teriamos que criar um método getter para a senha na classe mãe, que seria herdado pela classe filha assim como os outros métodos getter.

## Exercício 6:

a) A mensagem foi impressa uma vez porque o construtor da classe User foi chamado uma vez.
b) Todas as propriedades menos a password, porque ela não tem um método getter.

## Exercício 8:

a) Já que não há nenhuma propriedade nova nessa classe, eu não tive que passar nenhum parâmetro para o construtor, pois ele já usa o construtor da classe mãe.
b) A única propriedade que eu não consegui pegar foi a password porque ela é privada e não existe um método getter para pegá-la.

## Exercício 9:

a) Não é possível, porque não existe um método getter para essa propriedade e ela é privada.

## Exercício 10:

a) Foi impresso o valor do cálculo novo para o total do salário do vendedor, porque a função calculateTotalSalary foi sobrescrevida na classe Seller.

### Polimorfismo:
## Exercício 1:

a) O nome, o número de cadastro e o total de energia consumida foram imprimidos, mas o valor da conta não foi, porque a função precisa ser chamada para poder imprimir esse valor.

## Exercício 2:

a) const place1: Place = new Place("13000321") 
O erro que o typescript gerou diz que não é possível criar uma instância de uma classe abstrata.
b) Para podermos criar uma instância dessa classe, teríamos que criar uma nova classe não abstrata para herdar as propriedades e métodos dessa classe e criar uma instância usando essa classe filha.

## Exercício 4:

a) As propriedades da classe ResidentialClient são name, registrationNumber, consumedEnergy, cpf, cep e residentsQuantity, porque ela tem propriedades herdadas da classe mãe e da interface Client, além da propriedade cpf que é apenas da própria classe. Os métodos são calculateBill e getCPF, o primeiro foi herdado da interface e o outro foi criado para a classe ResidentialClient.

## Exercício 5:

a) As semelhanças entre elas são as propriedades name, registrationNumber, consumedEnergy e cep pois elas são herdadas da interface Client.
b) As diferenças são os métodos getters, cada uma vai acessar uma propriedade diferente (cpf ou cnpj), e as propriedades cpf, cnpj, floorsQuantity e residentsQuantity que são exclusivas para uma ou outra classe.

## Exercício 6:

a) Ela é filha da classe Industry, porque essa clase tem a propriedade machinesQuantity e o método getMachinesQuantity que precisam ser acessados pela classe filha.
b) Ela implementa a interface Client, porque ela possue as propriedades do cliente que serão usadas nessa classe.
c) Apenas os getters do classe foram criados, porque nenhuma propriedade precisará ser alterada.