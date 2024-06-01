import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-3-120-248-65.eu-central-1.compute.amazonaws.com/',
});
