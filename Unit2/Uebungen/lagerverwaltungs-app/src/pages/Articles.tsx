import React, { useState } from 'react'
import { articles, Article } from '../data/mockData'

// Artikelseite - zeigt alle Artikel in einer Tabelle an
function Articles(): React.ReactElement {
  const [searchTerm, setSearchTerm] = useState('')

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  const filteredArticles = articles.filter((article: Article) => {
    if (!normalizedSearchTerm) return true

    return [
      article.name,
      article.articleNumber,
      article.category,
      article.location,
      article.status
    ].some((value) => value.toLowerCase().includes(normalizedSearchTerm))
  })

  return (
    <div>
      <h1 className="page-title">Artikel</h1>
      <p className="page-subtitle">Alle Lagerartikel im Ueberblick</p>

      {/* TODO: Tabelle mit allen Artikeln ausgeben */}
      {/* Tipp: articles aus mockData importieren und mit .map() ueber die Liste iterieren */}
      {/* Felder: name, articleNumber, category, location, stock, minStock, status */}
      
      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Artikel suchen..."
          value={searchTerm}
          onChange={onSearch}
        />
      </div>

      <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Artikelnummer</th>
                  <th>Kategorie</th>
                  <th>Lagerort</th>
                  <th>Bestand</th>
                  <th>Mindestbestand</th>
                  <th>Differenz</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.map((article: Article) => (
                  <tr key={article.id}>
                    <td>{article.name}</td>
                    <td className="text-mono">{article.articleNumber}</td>
                    <td>{article.category}</td>
                    <td className="text-mono">{article.location}</td>
                    <td className="text-danger">{article.stock}</td>
                    <td>{article.minStock}</td>
                    <td className="text-danger">
                      {article.stock - article.minStock}
                    </td>
                  </tr>
                ))}
                {filteredArticles.length === 0 && (
                  <tr>
                    <td colSpan={7}>Keine passenden Artikel gefunden.</td>
                  </tr>
                )}
              </tbody>
            </table>
      </div>
    </div>
  )
}

export default Articles
