import axios from 'axios';

//todo перенести в настройки axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export * from './auth';
