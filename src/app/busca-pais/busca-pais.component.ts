import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { País } from '../model/pais';
import { PaisService } from '../model/pais.service';

@Component({
  selector: 'app-busca-pais',
  templateUrl: './busca-pais.component.html',
  styleUrl: './busca-pais.component.css',
})
export class BuscaPaisComponent {

  formBusca: FormGroup
  paises: País[] = []
  //buscarPaisPeloNome: any
  pesquisaFeita: boolean = false
  msgErro: string | undefined

  constructor(private fb: FormBuilder, private ps: PaisService) {
    this.formBusca = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  buscar() {
    const nome = this.formBusca.value.nome
    this.ps.buscarPaisPeloNome(nome).subscribe({
      next: (res) => {
        this.paises = res
        this.pesquisaFeita = true
        this.msgErro = res.length ? undefined : 'Nenhum resultado encontrado. Verifique o nome digitado e tente novamente.'
      },
      error: (err) => {
        console.error('Erro ao buscar país.', err)
        this.paises = []
        this.pesquisaFeita = true
        this.msgErro = 'Erro ao buscar país. Tente novamente mais tarde.'
      }
    })
  }

  sortearPais() {
    this.ps.devolverTodosOsPaises().subscribe({
      next: (res) => {
        const paisAleatorio = Math.floor(Math.random() * res.length)
        this.paises = [res[paisAleatorio]]
      }
    })
  }
}
