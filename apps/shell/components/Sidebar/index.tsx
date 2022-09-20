import { Sidebar as SidebarComponent, SidebarItem } from '@loja-integrada/admin-components'

const Sidebar = () => {
  const LI_APP_DOMAIN = 'http://app.lojaintegrada-local.com.br/painel'
  return (
    <SidebarComponent fixed className="mt-16">
      <SidebarItem
        title="Início"
        icon="home"
        href={`${LI_APP_DOMAIN}`}
      />
      <SidebarItem
        title="Vendas"
        icon="order"
        href={`${LI_APP_DOMAIN}/pedido/listar`}
      />
      <SidebarItem
        title="Produtos"
        icon="product"
        href={`${LI_APP_DOMAIN}/catalogo/produto/listar`}
      />
      <SidebarItem
        title="Marketing"
        icon="bullhorn"
        href={`${LI_APP_DOMAIN}/marketing/cupom/listar`}
      />
      <SidebarItem
        title="Soluções"
        icon="app"
        href={`${LI_APP_DOMAIN}/configuracao/app/listar`}
      />
      <SidebarItem
        title="Financeiro"
        icon="usdCircle"
        href={`${LI_APP_DOMAIN}/faturamento/faturas`}
      />
      <SidebarItem
        title="Visual"
        icon="tv"
        href={`${LI_APP_DOMAIN}/plataforma/conta/tema/editar`}
      />
      <SidebarItem
        title="Configurações"
        icon="cog"
        href={`${LI_APP_DOMAIN}/plataforma/conta/configuracao/editar`}
      />
    </SidebarComponent>
  )
}

export default Sidebar;
