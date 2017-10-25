import { environment } from '../environments/environment';

export class AppConstants {
    public static EVENTS = {
        showAlert: 'showAlert',
        showLoader: 'showLoader'
    };

    public static ENDPOINT = environment.endpoint;
}
