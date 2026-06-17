# Sabor & Arte — Pastelaria e Café

Site institucional da **Sabor & Arte**, pastelaria e café artesanal em Moscavide, Lisboa.

## 📂 Estrutura de Ficheiros

```
sabor-e-arte/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Todos os estilos
├── js/
│   └── main.js         ← Animações e interatividade
├── images/
│   └── logo.png        ← Logótipo
└── README.md
```

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `sabor-e-arte`)
2. Faça upload de todos os ficheiros mantendo a estrutura de pastas
3. Vá a **Settings → Pages**
4. Em *Source*, seleccione `main` branch e pasta `/root`
5. Clique **Save** — o site fica disponível em `https://seuuser.github.io/sabor-e-arte/`

## 🌐 Para domínio próprio (saborearte.pt)

Após publicar no GitHub Pages:
1. Compre o domínio em **Registro.pt** ou **GoDaddy**
2. No GitHub Pages → Custom domain → escreva `saborearte.pt`
3. No seu DNS, aponte os registos A para os IPs do GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Adicione um ficheiro `CNAME` com o conteúdo `saborearte.pt`

## ✅ Funcionalidades

- Design responsivo (mobile, tablet, desktop)
- SEO optimizado para Portugal (Schema.org, Open Graph, meta tags)
- Animações suaves com scroll reveal
- Galeria com carrossel automático
- Horário destacado com dia actual em tempo real
- Botão WhatsApp para contacto directo
- Google Maps integrado
- Acessibilidade (ARIA, navegação por teclado)
- Performance optimizada (fontes Google, sem dependências externas)
