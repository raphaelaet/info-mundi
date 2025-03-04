import { Component, OnInit } from '@angular/core';
import { País } from '../model/pais';
import { PaisService } from '../model/pais.service';

@Component({
  selector: 'app-acerta-bandeiras',
  templateUrl: './acerta-bandeiras.component.html',
  styleUrl: './acerta-bandeiras.component.css',
})
export class AcertaBandeirasComponent implements OnInit {
  paises: País[] = [];
  paisAtual: País | null = null;
  respostaUsuario: string = '';
  contadorAcertos: number = 0;
  mensagemResposta: string = '';
  mostrarTelaInicial: boolean = true;
  jogoIniciado: boolean = false;
  exibirBotaoReiniciar: boolean = false;

  constructor(private PaisService: PaisService) {}

  ngOnInit(): void {
    this.carregarTodosOsPaises();
  }

  iniciarJogo(): void {
    this.mostrarTelaInicial = false;
    this.selecionarNovoPais();
    this.contadorAcertos = 0;
    this.jogoIniciado = true;
  }

  carregarTodosOsPaises(): void {
    this.PaisService.devolverTodosOsPaises().subscribe((dados) => {
      this.paises = dados;
    });
  }

  selecionarNovoPais(): void {
    if (this.paises.length > 0) {
      const paisAleatorio = Math.floor(Math.random() * this.paises.length);
      this.paisAtual = this.paises[paisAleatorio];
    }
  }

  confirmarResposta(): void {
    if (!this.respostaUsuario.trim()) {
      this.mensagemResposta = 'O campo está vazio. Digite uma resposta!';
      return;
    }

    const resposta = this.respostaUsuario.trim().toLowerCase();
    const nomePortugues = this.paisAtual?.name.toLowerCase();
    const nomeIngles = this.paisAtual?.nameEnglish.toLowerCase();

    if (
      nomePortugues === 'Ilha Heard e Ilhas McDonald' ||
      nomePortugues === 'Ilhas Menores Distantes dos Estados Unidos' ||
      nomePortugues === 'Ilhas Svalbard e Jan Mayen' ||
      nomePortugues === 'Ilha Bouvet'
    ) {
      this.selecionarNovoPais();
    }

    if (resposta === nomePortugues || resposta === nomeIngles) {
      this.mensagemResposta = 'Resposta certa! Parabéns!';
      this.contadorAcertos++;
      this.selecionarNovoPais();
    }
    // else if (this.contadorAcertos == 246) {
    //   this.mensagemResposta = "Parabéns! Você venceu!"
    //   this.exibirBotaoReiniciar = true;
    // }
    // Implementar que países não se repitam no jogo para adicionar.
    else {
      this.mensagemResposta = `Resposta incorreta! A resposta certa era <strong>${this.paisAtual.name}</strong> (${this.paisAtual.nameEnglish}). Você acertou <strong>${this.contadorAcertos}</strong> país(es) seguido(s).`;
      this.exibirBotaoReiniciar = true;
    }

    this.respostaUsuario = '';
  }

  reiniciarJogo(): void {
    this.exibirBotaoReiniciar = false;
    this.mensagemResposta = '';
    this.contadorAcertos = 0;
    this.selecionarNovoPais();
  }

  voltarParaInicio(): void {
    window.location.reload();
  }
}
