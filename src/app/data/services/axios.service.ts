import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import axios, { AxiosPromise, AxiosResponse, Method } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  private instance = axios.create({
    baseURL: `${environment.serverURL}/api`,
    withCredentials: true,
  });

  constructor() {}

  public async makeRequest(
    method: Method,
    url: string,
    body: object | null = null
  ) {
    try {
      const response: AxiosResponse = await this.instance.request({
        method,
        url,
        data: body,
      });

      const { data } = response?.data;

      if (!environment.production) {
        console.log('REQUEST RESPONSE:');
        console.log(response);

        console.log('REQUEST DATA:');
        console.log(data);
      }

      if (data) return data;

      return response;
    } catch (error) {
      if (!environment.production) {
        if (error.response) {
          console.log('ERROR RESPONSE:');

          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log('ERROR REQUEST:');

          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error.message);
        }
        console.log('ERROR CONFIG:');

        console.log(error.config);
      }
    }
  }
}
