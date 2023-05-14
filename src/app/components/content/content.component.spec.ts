import { ContentComponent } from "./content.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { INotificacao } from "../../models/notificacao.model";
import { NotificationService } from "../../services/notification.service";
import { of } from "rxjs";

describe('ContentComponent', () => {
	let component: ContentComponent;
	let fixture: ComponentFixture<ContentComponent>;
	let notificationService = jasmine.createSpyObj(
		NotificationService,
		['getNotifications', 'editNotificationApi', 'removeNotification']
	);

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContentComponent],
			imports: [HttpClientModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			providers:[{provide: NotificationService, useValue: notificationService}]
		}).compileComponents();

		fixture = TestBed.createComponent(ContentComponent);
		component = fixture.componentInstance;
	});

	it('Should create component', () => {
		expect(component).toBeTruthy();
	});

	it('ngOnInit - should callcarregarNotificacoes method with success', () =>{
		spyOn(component, 'carregarNotificacoes');
		component.ngOnInit();

		expect(component.carregarNotificacoes).toHaveBeenCalled();
	});

	it('lerNotificacao - should call atualizarLista method with success', () => {
		spyOn(component, 'atualizarLista');

		const notificationMock: INotificacao = {
			aplicativo: '',
			lido: false,
			descricao: '',
			imagem: '',
			titulo: '',
			tempoPublicacao: ''
		};

		const readNotification = {...notificationMock, lido: true};

		notificationService.editNotificationApi.and.returnValue(of({}));

		component.lerNotificacao(notificationMock);
		expect(notificationService.editNotificationApi).toHaveBeenCalledOnceWith(readNotification);
		expect(component.atualizarLista).toHaveBeenCalled();
	});

	it('atualizarLista - should call carregarNotificacoes method with success', () => {
		spyOn(component, 'carregarNotificacoes');
		component.atualizarLista();
		expect(component.carregarNotificacoes).toHaveBeenCalled();
	});

})
