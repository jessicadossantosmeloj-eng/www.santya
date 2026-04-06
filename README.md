# Santya WWW V2

Versão refinada da landing page institucional da Santya para `www.santya.com.br`.

## Melhorias desta versão
- visual mais claro, elegante e profissional
- topo usando apenas o símbolo S
- favicon usando apenas o símbolo S
- rodapé com a logo completa maior
- hero e seções com menos peso visual
- paleta azul marinho + dourado suave
- responsividade melhorada

## O que ajustar antes de publicar
No arquivo `app/page.tsx`, troque os links de WhatsApp:
- substitua `5534999999999` pelo seu número real

## Estrutura recomendada
- `www.santya.com.br` → site institucional
- `app.santya.com.br` → sistema base
- `portentoconstrutora.santya.com.br` → ambiente da Portento

## Como rodar
```bash
npm install
npm run dev
```

## Como publicar
Crie um projeto separado na Vercel para este site e conecte nele o domínio `www.santya.com.br`.