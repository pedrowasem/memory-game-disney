import axios from 'axios';

// Create instance called instance
const instance = axios.create({
	baseURL: 'https://api.disneyapi.dev',
});

export default {
	getData: () =>
		instance({
			method: 'GET',
			url: '//character',
		}),
	transformResponse: [
		function (data) {
			// Do whatever you want to transform the data
			console.log('Transforming data...');
			const json = JSON.parse(data);
			// list of nested object keys
			const dates = Object.keys(json['nested object']);
			data = {
				dates,
			};
			return data;
		},
	],
};
