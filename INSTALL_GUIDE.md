# 📖 Guia de Instalação - Portfolio Gabriel Selvenca

## 🎯 Passo a Passo Completo

### 1️⃣ Instalar Dependências

Abra o terminal no diretório do projeto e execute:

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias:
- React & React DOM
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Lucide React
- E todas as outras dependências do projeto

### 2️⃣ Renomear Arquivo HTML

O novo arquivo HTML principal é `index_new.html`. Você tem duas opções:

**Opção A: Renomear manualmente**
- Renomeie `index.html` para `index_old.html` (backup)
- Renomeie `index_new.html` para `index.html`

**Opção B: Usar o novo diretamente**
O Vite já está configurado para usar o arquivo correto.

### 3️⃣ Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado em `http://localhost:3000` e abrirá automaticamente no navegador.

### 4️⃣ Verificar Funcionamento

Você deverá ver:
- ✅ Tela de loading animada
- ✅ Header com navegação
- ✅ Seção Hero com sua foto e informações
- ✅ Todas as seções funcionando
- ✅ Animações suaves ao rolar a página
- ✅ Design responsivo em mobile

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build para Produção
npm run build            # Cria versão otimizada para produção

# Preview da Build
npm run preview          # Visualiza a versão de produção localmente

# Verificar Erros
npm run lint             # Analisa o código em busca de problemas
```

## 🎨 Personalização Rápida

### Alterar Cores
Edite `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#803AF3',  // Sua cor principal
    light: '#8E6DC4',
    dark: '#6B2FD1',
  }
}
```

### Alterar Informações Pessoais
Edite os componentes em `src/components/`:
- `Hero.tsx` - Informações principais
- `About.tsx` - Sobre você
- `Skills.tsx` - Suas habilidades
- `Projects.tsx` - Seus projetos
- `Experience.tsx` - Experiência profissional
- `Contact.tsx` - Informações de contato

### Trocar Imagens
Substitua as imagens em `public/img/`:
- `perfil.png` - Sua foto de perfil
- `foto_eu.jpg` - Foto para seção "Sobre"
- Imagens dos projetos

## 🚨 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Use outra porta
npm run dev -- --port 3001
```

### Estilos não aparecem
```bash
# Reconstrua o CSS do Tailwind
npm run build
npm run dev
```

### Imagens não carregam
- Verifique se as imagens estão em `public/img/`
- Caminhos devem começar com `/img/` (ex: `/img/perfil.png`)

## 📱 Testar Responsividade

### No Navegador
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo móvel
3. Teste diferentes tamanhos de tela

### Dispositivos Reais
1. Execute `npm run dev`
2. Acesse pelo IP local (ex: `192.168.1.x:3000`)
3. Teste em seu celular/tablet

## 🌐 Deploy

### Opção 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel login
vercel
```

### Opção 2: Netlify
1. Execute `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para fazer upload

### Opção 3: GitHub Pages
1. Instale gh-pages: `npm install -D gh-pages`
2. Adicione ao package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## ✅ Checklist Final

- [ ] Dependências instaladas (`npm install`)
- [ ] Servidor rodando (`npm run dev`)
- [ ] Todas as seções visíveis
- [ ] Animações funcionando
- [ ] Links das redes sociais atualizados
- [ ] Imagens personalizadas
- [ ] Informações pessoais atualizadas
- [ ] Projetos adicionados/atualizados
- [ ] Testado em mobile
- [ ] Build de produção criada (`npm run build`)

## 💡 Dicas

1. **Desenvolvimento**: Use `npm run dev` para ver mudanças em tempo real
2. **Performance**: Otimize imagens antes de adicionar (use WebP quando possível)
3. **SEO**: Atualize meta tags no `index.html`
4. **Analytics**: Adicione Google Analytics se desejar
5. **Backup**: Mantenha os arquivos antigos até confirmar que tudo funciona

## 🆘 Precisa de Ajuda?

- 📧 Email: biel.selvenca@gmail.com
- 💬 GitHub Issues: Abra uma issue no repositório
- 📚 Documentação: Consulte o README.md

---

**Boa sorte com seu novo portfolio! 🚀**
