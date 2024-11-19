import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParlamentaresService } from '../parlamentares.service';
import { Parlamentar } from '../parlamentar';


@Component({
  selector: 'app-buscar-deputados',
  templateUrl: './buscar-deputados.component.html',
  styleUrl: './buscar-deputados.component.css'
})
export class BuscaDeputadoComponent {
  formBusca: FormGroup;
  parlamentar: Parlamentar[] = [];

  constructor(private fb: FormBuilder, private parlamentares: ParlamentaresService) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  buscar() {
    const nome = this.formBusca.value.nome;
    this.parlamentares.buscarParlamentaresPorNome(nome).subscribe({
      next: (data) => (this.parlamentar = data),
      error: (err) => console.error(err),
    });
  }
}
