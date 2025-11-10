# 🎨 Guia de Personalização do Portfolio

Este guia vai te ajudar a personalizar cada parte do seu portfolio de forma fácil e rápida.

## 📝 Informações Pessoais

### Hero Section (`src/components/Hero.tsx`)

**Linha 10-18** - Suas redes sociais:
```typescript
const socialLinks = [
  {
    icon: <Github size={24} />,
    href: 'https://github.com/SEU_USUARIO',  // ← Altere aqui
    label: 'GitHub'
  },
  // ... outros links
]
```

**Linha 20-28** - Suas especialidades:
```typescript
const specialties = [
  'Desenvolvimento Web',      // ← Personalize suas áreas
  'Aplicativos Mobile',
  'Backend Desktop',
  'APIs REST',
  'Banco de Dados'
]
```

**Linha 43-47** - Seu nome e título:
```typescript
<h2>Olá, eu sou</h2>
<h1>SEU NOME <span>SOBRENOME</span></h1>  // ← Altere aqui
```

**Linha 59-64** - Sua descrição:
```typescript
<p>
  Sua descrição pessoal aqui...  // ← Escreva sobre você
</p>
```

---

## 👤 Seção Sobre Mim (`src/components/About.tsx`)

**Linha 12-22** - Calcular sua idade:
```typescript
const birthDate = new Date(2006, 8, 8)  // ← Ano, Mês-1, Dia
```

**Linha 25-28** - Anos de experiência:
```typescript
const startDate = new Date(2018, 6)  // ← Ano que começou, Mês-1
```

**Linha 109-130** - Sua biografia:
```typescript
<p>
  Olá! Sou [SEU NOME], um desenvolvedor...  // ← Escreva sua história
</p>
```

---

## 💻 Skills (`src/components/Skills.tsx`)

**Linha 11-59** - Adicione/remova suas skills:
```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95, icon: '🌐' },  // ← Ajuste os níveis
      { name: 'CSS3', level: 90, icon: '🎨' },
      // Adicione mais skills aqui
    ]
  },
  // Outras categorias...
]
```

**Dica:** Use emojis relevantes para cada tecnologia!

---

## 🚀 Projetos (`src/components/Projects.tsx`)

**Linha 11-67** - Seus projetos:
```typescript
const projects = [
  {
    title: 'Nome do Projeto',                    // ← Nome
    description: 'Descrição detalhada...',       // ← Descrição
    image: '/img/projeto.png',                   // ← Imagem (coloque em public/img/)
    tags: ['React', 'TypeScript', 'API'],        // ← Tecnologias usadas
    github: 'https://github.com/user/repo',      // ← Link GitHub
    demo: 'https://seusite.com',                 // ← Link demo
    color: 'from-blue-500 to-purple-500'         // ← Cor do gradiente
  },
  // Adicione mais projetos...
]
```

**Cores disponíveis para gradientes:**
- `from-blue-500 to-purple-500`
- `from-green-500 to-teal-500`
- `from-orange-500 to-red-500`
- `from-pink-500 to-purple-500`
- `from-cyan-500 to-blue-500`
- `from-yellow-500 to-orange-500`

---

## 📚 Experiência (`src/components/Experience.tsx`)

**Linha 11-51** - Suas experiências:
```typescript
const experiences = [
  {
    icon: <Briefcase size={24} />,
    title: 'Cargo',                              // ← Seu cargo
    company: 'Empresa',                          // ← Nome da empresa
    period: '2020 - Presente',                   // ← Período
    description: 'O que você fez...',            // ← Descrição
    achievements: [                              // ← Conquistas
      'Conquista 1',
      'Conquista 2',
    ],
    color: 'from-blue-500 to-purple-500'
  },
  // Adicione mais experiências...
]
```

**Linha 53-72** - Certificações:
```typescript
const certifications = [
  {
    title: 'Nome do Curso',                      // ← Nome
    issuer: 'Instituição',                       // ← Quem emitiu
    year: '2024'                                 // ← Ano
  },
  // Adicione mais certificações...
]
```

---

## 📧 Contato (`src/components/Contact.tsx`)

**Linha 11-43** - Informações de contato:
```typescript
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'seu@email.com',                      // ← Seu email
    link: 'mailto:seu@email.com',
    color: 'from-red-500 to-pink-500'
  },
  // Outros contatos...
]
```

---

## 🎨 Cores do Site

### Arquivo: `tailwind.config.js`

**Linha 8-14** - Paleta de cores principal:
```javascript
colors: {
  primary: {
    DEFAULT: '#803AF3',    // ← Cor principal (roxo)
    light: '#8E6DC4',      // ← Versão clara
    dark: '#6B2FD1',       // ← Versão escura
  },
  // ...
}
```

**Sugestões de cores:**
- **Azul:** `#3B82F6` (moderno e profissional)
- **Verde:** `#10B981` (fresco e natural)
- **Roxo:** `#803AF3` (criativo e tech)
- **Laranja:** `#F59E0B` (energético e vibrante)
- **Rosa:** `#EC4899` (moderno e ousado)

---

## 🖼️ Imagens

### Localização: `public/img/`

**Imagens necessárias:**
1. `perfil.png` - Sua foto de perfil (recomendado: 400x400px)
2. `foto_eu.jpg` - Foto para seção "Sobre" (recomendado: 800x600px)
3. Imagens dos projetos (recomendado: 800x600px)

**Dicas:**
- Use formato WebP para melhor performance
- Otimize as imagens antes de adicionar (use TinyPNG)
- Mantenha proporção 4:3 para projetos
- Use fundo transparente para foto de perfil

---

## 🎭 Animações

### Velocidade das animações (`src/components/*.tsx`)

Procure por `duration` e ajuste:
```typescript
transition={{ duration: 0.6 }}  // ← Aumente para mais lento, diminua para mais rápido
```

### Desabilitar animações

Para desabilitar em um componente específico, remova:
```typescript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

---

## 📱 Responsividade

### Breakpoints (já configurados)

- **Mobile:** até 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

### Testar responsividade:
```bash
# No navegador, pressione F12 e clique no ícone de dispositivo móvel
# Ou acesse pelo celular usando o IP local
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
1. `npm run build`
2. Arraste a pasta `dist` para netlify.com

### GitHub Pages
```bash
npm install -D gh-pages
# Adicione ao package.json:
"deploy": "npm run build && gh-pages -d dist"
# Execute:
npm run deploy
```

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor local

# Build
npm run build            # Cria versão otimizada

# Preview
npm run preview          # Testa a build localmente

# Lint
npm run lint             # Verifica erros no código
```

---

## 💡 Dicas Extras

### 1. SEO
Edite `index.html` (linha 7-9):
```html
<meta name="description" content="Sua descrição aqui" />
<meta name="keywords" content="suas, palavras, chave" />
```

### 2. Google Analytics
Adicione no `index.html` antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 3. Favicon
Substitua `public/img/perfil.png` por seu favicon personalizado

### 4. Performance
- Otimize imagens (use WebP)
- Minimize CSS/JS (já feito pelo Vite)
- Use lazy loading para imagens pesadas

---

## 🆘 Problemas Comuns

### Imagens não aparecem
- Verifique se estão em `public/img/`
- Use caminho `/img/nome.png` (com barra no início)

### Cores não mudam
- Limpe o cache: `Ctrl + Shift + R`
- Reconstrua: `npm run build && npm run dev`

### Animações travando
- Reduza o número de partículas em `ParticlesBackground.tsx`
- Aumente a `duration` das animações

---

## 📞 Suporte

Precisa de ajuda? Entre em contato:
- 📧 Email: biel.selvenca@gmail.com
- 💬 GitHub: Abra uma issue no repositório

---

**Divirta-se personalizando seu portfolio! 🎉**
