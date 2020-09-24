import Mail from '../lib/Mail.js';
export default { 
     key: 'RegistrationMail',
     options:{
          delay: 5000,
          priority: 3
     },
     async handle({ data }){
          const { user } = data;

          await Mail.sendMail({
               from: 'Uriel uriel_santos29@hotmail.com',
               to: `${user.name} <${user.email}`,
               subject: 'cadastro de usuário',
               html: `Olá ${user.name}, bem vindo ao site`
          });

     }
}