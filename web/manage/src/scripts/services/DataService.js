export default class DataService {

	/*@ngInject*/
	constructor($resource) {
		this.$resource = $resource;
		this.urlPrefix = 'http://localhost\\:8000/';
		let rest = {
			list: { 
				method: 'GET',
				params: {
					id: '',
					path: 'models'
				},
				isArray: true
			}	
		};
		return this.$resource(this.urlPrefix + 'api/data/:id/:path', null, rest);
	}
}