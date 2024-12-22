import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { País } from './pais';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private API = 'https://restcountries.com/v3.1/translation/'

  constructor(private http: HttpClient) { }

  buscarPaisPeloNome(nome: string): Observable<País[]> {
    return this.http.get<any[]>(`${this.API}${nome}`).pipe(
      map((res) =>
        res.filter((pais) =>
          pais.name?.common?.toLowerCase().includes(nome.toLowerCase()) ||
          pais.translations?.por?.common?.toLowerCase().includes(nome.toLowerCase())
        )
        .map((pais) => ({
          name: pais.translations?.por?.common || pais.name.common,
          nameEnglish: pais.name.common,
          capital: pais.capital || ['Não informado.'],
          continent: pais.continents ? pais.continents[0] : 'Não informado.',
          languages: pais.languages ? Object.values(pais.languages).join(', ') : 'Não informado.',
          population: pais.population,
          currency: pais.currencies ? Object.values(pais.currencies).map((currency: any) => currency.name).join(", ") : 'Não informado.',
          flagPng: pais.flags?.png,
          googleMapsLink: pais.maps?.googleMaps || '#'
        }))
      )
    )
  }

  devolverTodosOsPaises(): Observable<País[]> {
    return this.http.get<País[]>("https://restcountries.com/v3.1/all").pipe(
      map((res: any[]) =>
        res.map((pais) => ({
          name: pais.translations?.por?.common || pais.name.common,
          nameEnglish: pais.name.common,
          capital: pais.capital || ['Não informado.'],
          continent: pais.continents ? pais.continents[0] : 'Não informado.',
          languages: pais.languages ? Object.values(pais.languages).join(', ') : 'Não informado.',
          population: pais.population,
          currency: pais.currencies ? Object.values(pais.currencies).map((currency: any) => currency.name).join(", ") : 'Não informado.',
          flagPng: pais.flags?.png,
          googleMapsLink: pais.maps?.googleMaps || '#'
        }))
      )
    )
  }
}