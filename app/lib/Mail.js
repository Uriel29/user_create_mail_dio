import nodemailer from 'nodemailer';
import mails from '../config/mail.js'



export default nodemailer.createTransport(mails)
