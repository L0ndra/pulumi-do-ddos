Встановлюємо pulumi по інструкції https://www.pulumi.com/docs/get-started/install/ та логінимось будьяким способом https://www.pulumi.com/docs/reference/cli/pulumi_login/

Встановлюємо гіт https://git-scm.com/downloads

Встановлюємо ноду https://nodejs.org/uk/download/

Виконуємо наступну команду в командній строці 
```
git clone https://github.com/L0ndra/pulumi-do-ddos.git
cd pulumi-do-ddos
npm install
```
Створюємо новий аккаунт на Digital Ocean та поповнюємо на 5$ за допомогою PayPal https://m.do.co/c/2ce21bb1833d

Переходимо до розділу апі ключів та генеруємо новий токен https://cloud.digitalocean.com/account/api/tokens?i=9b4c48

Далі ключ вставляємо в наступну команду 
`pulumi config set digitalocean:token YOUR_TOKEN_HERE --secret` де замість YOUR_TOKEN_HERE ваш ключ 

А потім виконуєте команду 
`pulumi up`

Чекаєте, це займає хвилин 7