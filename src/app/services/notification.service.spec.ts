import { TestBed } from "@angular/core/testing";
import { NotificationService } from "./notification.service";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('NotificationService', () => {
	let httpTestingController: HttpTestingController;
	let notificationService: NotificationService;
	let httpClient: HttpClient;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ NotificationService ],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
		notificationService = TestBed.inject(NotificationService);
	});

	it('Should create service component', () => {
		expect(notificationService).toBeTruthy();
	})
})