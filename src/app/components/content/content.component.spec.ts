import { ContentComponent } from "./content.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('ContentComponent', () => {
	let component: ContentComponent;
	let fixture: ComponentFixture<ContentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContentComponent],
			imports: [HttpClientModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(ContentComponent);
		component = fixture.componentInstance;
	});

	it('Should create component', () => {
		expect(component).toBeTruthy();
	});

	it('ngOnInit - deve chamar o método carregarNotificacoes com sucesso', () =>{
		spyOn(component, 'carregarNotificacoes');
		component.ngOnInit();

		expect(component.carregarNotificacoes).toHaveBeenCalled();
	});

})
