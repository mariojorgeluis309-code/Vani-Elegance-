/* Vani Elegance — aplicação frontend. Traduções incluídas neste ficheiro para manter apenas 3 ficheiros. */
(() => {
  'use strict';

  const SUPABASE_URL = 'https://ppaeifsqjuzlizyzfkac.supabase.co';
  // Chave publishable: pode estar no frontend. Nunca colocar aqui service_role/secret keys.
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_mLDL038QxBhm8E2FYaJbsg__EsB0QE8';
  const STORAGE_BUCKET = 'product-images';
  const CART_KEY = 'vani_elegance_cart_v1';
  const LANGUAGE_KEY = 'vani_elegance_language';
  const METHODS = ['mpesa', 'emola', 'mkesh', 'bank', 'local'];
  const METHOD_NAMES = { mpesa: 'M-Pesa', emola: 'e-Mola', mkesh: 'mKesh', bank: 'Banco / transferência', local: 'Pagamento no local' };
  const STATUS_LABELS = { pending: 'Pendente', awaiting_payment: 'A aguardar pagamento', paid: 'Pago', preparing: 'Em preparação', ready: 'Pronto', delivered: 'Entregue', cancelled: 'Cancelado' };

  const I18N = {
    pt: {
      announcement:'Moda elegante · Pedido simples · Confirmação por WhatsApp',brandSub:'MODA COM ELEGÂNCIA',navHome:'Início',navCollection:'Coleção',navBrand:'A Marca',navContact:'Contacto',language:'Idioma',cart:'Saco',heroEyebrow:'NOVA COLEÇÃO',heroTitle:'Elegância que veste a sua história',heroText:'Descubra peças pensadas para realçar o seu estilo, com qualidade e acabamento cuidado.',explore:'Explorar coleção',talkToUs:'Falar connosco',heroNote:'Peças escolhidas com cuidado, para si.',styleNote:'ESTILO · CONFIANÇA · DETALHE',curated:'CURADORIA COM INTENÇÃO',promise1Title:'Pedido simples',promise1Text:'Escolha as suas peças em poucos passos.',promise2Title:'Vários métodos de pagamento',promise2Text:'Consulte as opções disponíveis no checkout.',promise3Title:'Confirmação por WhatsApp',promise3Text:'Receba o resumo do seu pedido.',categoriesEyebrow:'ESCOLHA O SEU ESTILO',collectionTitle:'A coleção',collectionText:'Explore, filtre e encontre a sua peça.',pieces:'PEÇAS',all:'Todos',searchPlaceholder:'Pesquisar na coleção…',sort:'Ordenar',sortFeatured:'Destaques primeiro',sortNewest:'Mais recentes',sortPriceAsc:'Preço: menor para maior',sortPriceDesc:'Preço: maior para menor',sortSale:'Promoções primeiro',loading:'A carregar…',storyCaption:'A beleza está nos detalhes.',storyEyebrow:'A NOSSA ESSÊNCIA',storyTitle:'A marca Vani Elegance',storyText:'A Vani Elegance nasce da vontade de vestir com sofisticação e autenticidade. Cada peça é escolhida a pensar no conforto, no detalhe e na confiança de quem a usa.',qualityTitle:'Qualidade',qualityText:'Peças selecionadas com atenção ao acabamento.',styleTitle:'Estilo',styleText:'Design elegante para o dia a dia e ocasiões especiais.',trustTitle:'Confiança',trustText:'Pedido acompanhado com número único e confirmação.',contactEyebrow:'ESTAMOS POR PERTO',contactTitle:'Contacto',contactText:'Estamos disponíveis para ajudar a encontrar a peça certa.',talkWhatsApp:'Falar pelo WhatsApp',footerTagline:'Moda com elegância e confiança.',privateArea:'Área reservada',yourSelection:'A SUA SELEÇÃO',yourBag:'O seu saco',subtotal:'Subtotal',checkoutNote:'O total final é calculado e validado no momento do pedido.',continueCheckout:'Continuar para o pedido →',continueShopping:'Continuar a comprar',almostThere:'ESTÁ QUASE',finishOrder:'Finalizar pedido',fullName:'Nome completo *',phone:'Telefone *',deliveryAddress:'Morada/local de entrega *',paymentMethod:'Método de pagamento *',paymentReference:'Referência/comprovativo (opcional)',referenceWarning:'A referência não confirma o pagamento. A loja fará a verificação separadamente.',orderTotal:'Total estimado',placeOrder:'Criar pedido e continuar →',orderConsent:'O pedido só será registado depois da confirmação do servidor.',orderCreated:'Pedido registado',orderNumberLabel:'Número do pedido',whatsAppNext:'Abra o WhatsApp para enviar o resumo do seu pedido à loja.',openWhatsApp:'Abrir WhatsApp ↗',closeWindow:'Fechar',ownerPanel:'PAINEL DA LOJA',adminWelcome:'A elegância começa numa boa gestão.',secureAccess:'ACESSO SEGURO',welcomeBack:'Bem-vinda de volta',loginDescription:'Entre com a conta de administradora da loja.',email:'Email',password:'Palavra-passe',signIn:'Entrar na conta',forgotPassword:'Esqueci-me da palavra-passe',loginPrivacy:'Não partilhe a sua palavra-passe com ninguém.',logout:'Sair',overview:'Visão geral',products:'Produtos',categories:'Categorias',orders:'Pedidos',settings:'Loja',payments:'Pagamentos',security:'Segurança',todayAtStore:'RESUMO DA LOJA',overviewTitle:'A sua loja, num só lugar',refresh:'Atualizar ↻',registeredProducts:'Produtos registados',ordersRegistered:'Pedidos registados',pendingOrders:'Pendentes',needAttention:'Precisam de atenção',activeCategories:'Categorias ativas',realDataTitle:'Dados reais da sua loja',realDataText:'Os números são lidos da base de dados. Os produtos e pedidos só aparecem depois de serem realmente registados.',catalogManagement:'CATÁLOGO',manageProducts:'Gerir produtos',newProduct:'+ Novo produto',productName:'Nome do produto *',category:'Categoria',noCategory:'Sem categoria',priceMT:'Preço (MT) *',comparePrice:'Preço anterior (promoção)',description:'Descrição',mainImageUrl:'URL da imagem principal',uploadImage:'Ou carregar imagem',imageUploadNote:'A imagem é guardada no Supabase Storage.',stock:'Stock (deixe vazio para ilimitado)',featured:'Produto em destaque',active:'Ativo na loja',variants:'Variantes (uma por linha)',variantFormat:'Formato: Tamanho | Cor | SKU | Preço opcional | Stock opcional. Deixe vazio se não usar variantes.',saveProduct:'Guardar produto',cancel:'Cancelar',catalogStructure:'ESTRUTURA DO CATÁLOGO',manageCategories:'Gerir categorias',categoryName:'Nome da categoria',saveCategory:'Guardar categoria',orderManagement:'ACOMPANHAMENTO',manageOrders:'Gerir pedidos',filterStatus:'Filtrar estado',allStatuses:'Todos os estados',storeIdentity:'IDENTIDADE',storeSettings:'Definições da loja',storeName:'Nome da loja',logoUrl:'URL do logótipo',storeWhatsApp:'WhatsApp (com indicativo do país)',storePhone:'Telefone',storeAddress:'Morada',currencyCode:'Código da moeda',currencyLabel:'Símbolo/etiqueta da moeda',defaultLanguage:'Idioma por defeito',saveSettings:'Guardar definições',paymentManagement:'RECEBIMENTOS',paymentSettings:'Métodos de pagamento',paymentSettingsNote:'Preencha apenas os dados oficiais da loja. Não é feita confirmação automática de pagamento.',savePaymentSettings:'Guardar métodos de pagamento',accountProtection:'PROTEÇÃO DA CONTA',changePassword:'Alterar palavra-passe',newPassword:'Nova palavra-passe',confirmPassword:'Confirmar palavra-passe',updatePassword:'Atualizar palavra-passe',accountNoteTitle:'Acesso administrativo',accountNoteText:'Só uma conta autenticada com o papel admin na base de dados pode gerir os dados da loja.',addedToCart:'Adicionado ao saco.',emptyProductsTitle:'A coleção está a ser preparada',emptyProductsText:'Ainda não existem produtos publicados. Volte mais tarde para descobrir as novidades.',noSearchTitle:'Não encontrámos essa peça',noSearchText:'Experimente outra palavra ou escolha uma categoria diferente.',chooseVariant:'Escolha uma variante antes de adicionar.',outOfStock:'Sem stock disponível',addToBag:'Adicionar ao saco',onSale:'Promoção',featuredBadge:'Destaque',noDescription:'Uma peça selecionada pela Vani Elegance.',remove:'Remover',edit:'Editar',delete:'Eliminar',activate:'Ativar',deactivate:'Desativar',noCategories:'Ainda não existem categorias.',noOrders:'Ainda não existem pedidos registados.',noProductsAdmin:'Ainda não existem produtos. Use “Novo produto” para adicionar o primeiro.',noCategoryProducts:'Sem categoria',deleteConfirm:'Tem a certeza de que pretende eliminar este registo?',categoryInUse:'Esta categoria tem produtos associados. Foi desativada em vez de eliminada.',categoryDeleted:'Categoria eliminada.',categorySaved:'Categoria guardada na base de dados.',productSaved:'Produto guardado na base de dados.',productDeleted:'Produto eliminado.',productToggled:'Estado do produto atualizado.',orderStatusSaved:'Estado do pedido atualizado.',settingsSaved:'Definições da loja guardadas.',paymentsSaved:'Métodos de pagamento guardados.',passwordUpdated:'Palavra-passe atualizada.',loginFailed:'Não foi possível iniciar sessão.',notAdmin:'Esta conta não tem permissões de administradora.',connectionError:'Não foi possível contactar a base de dados. Verifique a internet e tente novamente.',noWhatsApp:'Ainda não foi configurado um número de WhatsApp da loja.',emptyCart:'O seu saco está vazio.',checkoutEmpty:'Adicione pelo menos uma peça antes de continuar.',orderFailed:'Não foi possível registar o pedido.',requiredFields:'Preencha todos os campos obrigatórios.',variantFormatError:'Há uma linha de variante inválida. Use: Tamanho | Cor | SKU | Preço opcional | Stock opcional.',imageUploadFailed:'Não foi possível carregar a imagem.',partialSave:'O produto foi guardado, mas houve um erro ao guardar as variantes. Reveja o produto antes de sair.',paymentAccount:'Dados de recebimento',accountName:'Nome da conta',accountNumber:'Número/conta',bankName:'Nome do banco',instructions:'Instruções para o cliente',enabledMethod:'Método ativo',paymentInfoMissing:'A loja ainda não configurou instruções para este método. Contacte a loja antes de pagar.',status:'Estado',customer:'Cliente',total:'Total',date:'Data',items:'Artigos',address:'Morada',reference:'Referência',method:'Método',saving:'A guardar…',saved:'Guardado',orderCreatedTitle:'Pedido registado com sucesso',confirmEmailReset:'Introduza o email da conta de administradora:',recoveryTitle:'Definir nova palavra-passe',recoveryDescription:'Escolha uma nova palavra-passe para recuperar o acesso à loja.',recoverySave:'Guardar nova palavra-passe',resetSent:'Se o email estiver registado, receberá uma mensagem para recuperar o acesso.',invalidPassword:'As palavras-passe não coincidem ou têm menos de 8 caracteres.',productNoStock:'Este produto está sem stock.',stockShort:'Stock insuficiente para a quantidade pedida.',rpcInvalidProduct:'Um produto já não está disponível. Atualize o saco e tente novamente.',rpcPaymentUnavailable:'Este método de pagamento não está disponível neste momento.',rpcReferenceTooLong:'A referência não pode ultrapassar 120 caracteres.',rpcAddressRequired:'Indique a morada/local de entrega.',orderWhatsappMessage:'Olá! Registei o pedido {number} na Vani Elegance. Total indicado: {total}. O pagamento ainda aguarda verificação.',manage:'Gerir',noPhoto:'Sem imagem',searchNoResults:'Sem resultados',unit:'un.',privacy:'Privacidade',ordersNotPaymentProof:'O pedido registado não representa confirmação de pagamento.'
    },
    en: {
      announcement:'Elegant fashion · Easy ordering · WhatsApp follow-up',brandSub:'FASHION WITH ELEGANCE',navHome:'Home',navCollection:'Collection',navBrand:'Our Brand',navContact:'Contact',language:'Language',cart:'Bag',heroEyebrow:'NEW COLLECTION',heroTitle:'Elegance that dresses your story',heroText:'Discover pieces chosen to highlight your style, with quality and thoughtful finishing.',explore:'Explore collection',talkToUs:'Talk to us',heroNote:'Pieces carefully selected for you.',styleNote:'STYLE · CONFIDENCE · DETAIL',curated:'THOUGHTFUL CURATION',promise1Title:'Easy ordering',promise1Text:'Choose your pieces in a few steps.',promise2Title:'Multiple payment methods',promise2Text:'See available options at checkout.',promise3Title:'WhatsApp follow-up',promise3Text:'Receive your order summary.',categoriesEyebrow:'FIND YOUR STYLE',collectionTitle:'The collection',collectionText:'Explore, filter and find your piece.',pieces:'PIECES',all:'All',searchPlaceholder:'Search the collection…',sort:'Sort',sortFeatured:'Featured first',sortNewest:'Newest',sortPriceAsc:'Price: low to high',sortPriceDesc:'Price: high to low',sortSale:'Sale first',loading:'Loading…',storyCaption:'Beauty is in the details.',storyEyebrow:'OUR ESSENCE',storyTitle:'The Vani Elegance brand',storyText:'Vani Elegance was born from a desire to dress with sophistication and authenticity. Each piece is selected with comfort, detail and confidence in mind.',qualityTitle:'Quality',qualityText:'Pieces selected with attention to finish.',styleTitle:'Style',styleText:'Elegant design for everyday life and special occasions.',trustTitle:'Trust',trustText:'Every order has a unique number and follow-up.',contactEyebrow:'WE ARE HERE',contactTitle:'Contact',contactText:'We are available to help you find the right piece.',talkWhatsApp:'Contact on WhatsApp',footerTagline:'Fashion with elegance and confidence.',privateArea:'Owner area',yourSelection:'YOUR SELECTION',yourBag:'Your bag',subtotal:'Subtotal',checkoutNote:'The final total is calculated and validated when the order is submitted.',continueCheckout:'Continue to checkout →',continueShopping:'Continue shopping',almostThere:'ALMOST THERE',finishOrder:'Complete order',fullName:'Full name *',phone:'Phone *',deliveryAddress:'Delivery address/location *',paymentMethod:'Payment method *',paymentReference:'Payment reference (optional)',referenceWarning:'A reference does not confirm payment. The store must verify it separately.',orderTotal:'Estimated total',placeOrder:'Create order and continue →',orderConsent:'The order is recorded only after server confirmation.',orderCreated:'Order recorded',orderNumberLabel:'Order number',whatsAppNext:'Open WhatsApp to send your order summary to the store.',openWhatsApp:'Open WhatsApp ↗',closeWindow:'Close',ownerPanel:'STORE PANEL',adminWelcome:'Elegance starts with good management.',secureAccess:'SECURE ACCESS',welcomeBack:'Welcome back',loginDescription:'Sign in with the store administrator account.',email:'Email',password:'Password',signIn:'Sign in',forgotPassword:'Forgot password?',loginPrivacy:'Never share your password.',logout:'Sign out',overview:'Overview',products:'Products',categories:'Categories',orders:'Orders',settings:'Store',payments:'Payments',security:'Security',todayAtStore:'STORE SUMMARY',overviewTitle:'Your store in one place',refresh:'Refresh ↻',registeredProducts:'Registered products',ordersRegistered:'Registered orders',pendingOrders:'Pending',needAttention:'Need attention',activeCategories:'Active categories',realDataTitle:'Real store data',realDataText:'Figures are read from the database. Products and orders appear only after they are actually saved.',catalogManagement:'CATALOG',manageProducts:'Manage products',newProduct:'+ New product',productName:'Product name *',category:'Category',noCategory:'No category',priceMT:'Price (MT) *',comparePrice:'Previous price (sale)',description:'Description',mainImageUrl:'Main image URL',uploadImage:'Or upload an image',imageUploadNote:'The image is saved in Supabase Storage.',stock:'Stock (blank means unlimited)',featured:'Featured product',active:'Active in store',variants:'Variants (one per line)',variantFormat:'Format: Size | Color | SKU | Optional price | Optional stock. Leave empty if not using variants.',saveProduct:'Save product',cancel:'Cancel',catalogStructure:'CATALOG STRUCTURE',manageCategories:'Manage categories',categoryName:'Category name',saveCategory:'Save category',orderManagement:'FOLLOW-UP',manageOrders:'Manage orders',filterStatus:'Filter status',allStatuses:'All statuses',storeIdentity:'IDENTITY',storeSettings:'Store settings',storeName:'Store name',logoUrl:'Logo URL',storeWhatsApp:'WhatsApp (with country code)',storePhone:'Phone',storeAddress:'Address',currencyCode:'Currency code',currencyLabel:'Currency symbol/label',defaultLanguage:'Default language',saveSettings:'Save settings',paymentManagement:'PAYMENTS',paymentSettings:'Payment methods',paymentSettingsNote:'Enter only official store payment details. Payments are not automatically verified.',savePaymentSettings:'Save payment methods',accountProtection:'ACCOUNT PROTECTION',changePassword:'Change password',newPassword:'New password',confirmPassword:'Confirm password',updatePassword:'Update password',addedToCart:'Added to your bag.',emptyProductsTitle:'The collection is being prepared',emptyProductsText:'There are no published products yet. Please come back later.',noSearchTitle:'We could not find that piece',noSearchText:'Try another search term or category.',chooseVariant:'Choose a variant before adding.',outOfStock:'Out of stock',addToBag:'Add to bag',onSale:'Sale',featuredBadge:'Featured',noDescription:'A piece selected by Vani Elegance.',remove:'Remove',edit:'Edit',delete:'Delete',activate:'Activate',deactivate:'Deactivate',noCategories:'No categories yet.',noOrders:'No orders have been recorded yet.',noProductsAdmin:'No products yet. Select “New product” to add one.',categoryDeleted:'Category deleted.',categorySaved:'Category saved to the database.',productSaved:'Product saved to the database.',productDeleted:'Product deleted.',productToggled:'Product status updated.',orderStatusSaved:'Order status updated.',settingsSaved:'Store settings saved.',paymentsSaved:'Payment methods saved.',passwordUpdated:'Password updated.',loginFailed:'Could not sign in.',notAdmin:'This account is not an administrator.',connectionError:'Could not contact the database. Check your connection and try again.',noWhatsApp:'The store has not configured a WhatsApp number.',emptyCart:'Your bag is empty.',checkoutEmpty:'Add at least one piece before checkout.',orderFailed:'Could not record the order.',requiredFields:'Complete all required fields.',variantFormatError:'An invalid variant row was found. Use: Size | Color | SKU | Optional price | Optional stock.',imageUploadFailed:'Could not upload the image.',partialSave:'The product was saved, but its variants could not be saved. Review the product before leaving.',paymentAccount:'Payment details',accountName:'Account name',accountNumber:'Account/number',bankName:'Bank name',instructions:'Customer instructions',enabledMethod:'Method active',status:'Status',customer:'Customer',total:'Total',date:'Date',items:'Items',address:'Address',reference:'Reference',method:'Method',saving:'Saving…',saved:'Saved',confirmEmailReset:'Enter the administrator account email:',recoveryTitle:'Set a new password',recoveryDescription:'Choose a new password to recover access to the store.',recoverySave:'Save new password',resetSent:'If this email is registered, you will receive a recovery message.',invalidPassword:'Passwords do not match or are shorter than 8 characters.',productNoStock:'This product is out of stock.',stockShort:'Not enough stock for the requested quantity.',rpcInvalidProduct:'A product is no longer available. Refresh your bag and try again.',rpcPaymentUnavailable:'This payment method is currently unavailable.',rpcReferenceTooLong:'The reference cannot exceed 120 characters.',rpcAddressRequired:'Enter a delivery address/location.',orderWhatsappMessage:'Hello! I placed order {number} at Vani Elegance. Estimated total: {total}. Payment is still awaiting verification.',manage:'Manage',noPhoto:'No image',searchNoResults:'No results',unit:'item(s)',ordersNotPaymentProof:'An order record does not confirm that payment has been received.'
    },
    fr: {
      announcement:'Mode élégante · Commande simple · Suivi par WhatsApp',brandSub:'LA MODE AVEC ÉLÉGANCE',navHome:'Accueil',navCollection:'Collection',navBrand:'La marque',navContact:'Contact',language:'Langue',cart:'Panier',heroEyebrow:'NOUVELLE COLLECTION',heroTitle:'L’élégance habille votre histoire',heroText:'Découvrez des pièces choisies pour souligner votre style, avec qualité et finitions soignées.',explore:'Explorer la collection',talkToUs:'Contactez-nous',heroNote:'Des pièces choisies avec soin pour vous.',styleNote:'STYLE · CONFIANCE · DÉTAIL',curated:'SÉLECTION ATTENTIVE',promise1Title:'Commande simple',promise1Text:'Choisissez vos pièces en quelques étapes.',promise2Title:'Plusieurs moyens de paiement',promise2Text:'Consultez les options au paiement.',promise3Title:'Suivi par WhatsApp',promise3Text:'Recevez le résumé de votre commande.',categoriesEyebrow:'TROUVEZ VOTRE STYLE',collectionTitle:'La collection',collectionText:'Explorez, filtrez et trouvez votre pièce.',pieces:'PIÈCES',all:'Tout',searchPlaceholder:'Rechercher dans la collection…',sort:'Trier',sortFeatured:'À la une',sortNewest:'Plus récentes',sortPriceAsc:'Prix croissant',sortPriceDesc:'Prix décroissant',sortSale:'Promotions d’abord',loading:'Chargement…',storyCaption:'La beauté est dans les détails.',storyEyebrow:'NOTRE ESSENCE',storyTitle:'La marque Vani Elegance',storyText:'Vani Elegance est née du désir de s’habiller avec sophistication et authenticité. Chaque pièce est choisie pour son confort, ses détails et la confiance qu’elle inspire.',qualityTitle:'Qualité',qualityText:'Des pièces choisies avec soin.',styleTitle:'Style',styleText:'Un design élégant au quotidien et pour les occasions spéciales.',trustTitle:'Confiance',trustText:'Chaque commande possède un numéro unique et un suivi.',contactEyebrow:'NOUS SOMMES LÀ',contactTitle:'Contact',contactText:'Nous sommes disponibles pour vous aider à trouver la bonne pièce.',talkWhatsApp:'Contacter sur WhatsApp',footerTagline:'La mode avec élégance et confiance.',privateArea:'Espace réservé',yourSelection:'VOTRE SÉLECTION',yourBag:'Votre panier',subtotal:'Sous-total',checkoutNote:'Le total final est calculé et validé lors de la commande.',continueCheckout:'Continuer vers la commande →',continueShopping:'Continuer les achats',almostThere:'PRESQUE TERMINÉ',finishOrder:'Finaliser la commande',fullName:'Nom complet *',phone:'Téléphone *',deliveryAddress:'Adresse de livraison *',paymentMethod:'Moyen de paiement *',paymentReference:'Référence de paiement (facultatif)',referenceWarning:'La référence ne confirme pas le paiement. Le magasin doit la vérifier séparément.',orderTotal:'Total estimé',placeOrder:'Créer la commande →',orderConsent:'La commande est enregistrée après confirmation du serveur.',orderCreated:'Commande enregistrée',orderNumberLabel:'Numéro de commande',whatsAppNext:'Ouvrez WhatsApp pour envoyer le résumé au magasin.',openWhatsApp:'Ouvrir WhatsApp ↗',closeWindow:'Fermer',ownerPanel:'PANNEAU DE LA BOUTIQUE',adminWelcome:'L’élégance commence par une bonne gestion.',secureAccess:'ACCÈS SÉCURISÉ',welcomeBack:'Bon retour',loginDescription:'Connectez-vous avec le compte administrateur.',email:'Email',password:'Mot de passe',signIn:'Se connecter',forgotPassword:'Mot de passe oublié ?',logout:'Déconnexion',overview:'Vue d’ensemble',products:'Produits',categories:'Catégories',orders:'Commandes',settings:'Boutique',payments:'Paiements',security:'Sécurité',todayAtStore:'RÉSUMÉ DE LA BOUTIQUE',overviewTitle:'Votre boutique au même endroit',refresh:'Actualiser ↻',registeredProducts:'Produits enregistrés',ordersRegistered:'Commandes enregistrées',pendingOrders:'En attente',needAttention:'À traiter',activeCategories:'Catégories actives',realDataTitle:'Données réelles',realDataText:'Les chiffres proviennent de la base de données. Aucun faux produit ou commande n’est affiché.',catalogManagement:'CATALOGUE',manageProducts:'Gérer les produits',newProduct:'+ Nouveau produit',productName:'Nom du produit *',category:'Catégorie',noCategory:'Sans catégorie',priceMT:'Prix (MT) *',comparePrice:'Ancien prix',description:'Description',mainImageUrl:'URL de l’image',uploadImage:'Ou charger une image',imageUploadNote:'L’image est enregistrée dans Supabase Storage.',stock:'Stock (vide = illimité)',featured:'Produit vedette',active:'Actif dans la boutique',variants:'Variantes (une par ligne)',variantFormat:'Format : Taille | Couleur | SKU | Prix facultatif | Stock facultatif.',saveProduct:'Enregistrer le produit',cancel:'Annuler',catalogStructure:'STRUCTURE DU CATALOGUE',manageCategories:'Gérer les catégories',categoryName:'Nom de catégorie',saveCategory:'Enregistrer',orderManagement:'SUIVI',manageOrders:'Gérer les commandes',filterStatus:'Filtrer par état',allStatuses:'Tous les états',storeIdentity:'IDENTITÉ',storeSettings:'Paramètres de la boutique',storeName:'Nom de la boutique',logoUrl:'URL du logo',storeWhatsApp:'WhatsApp (indicatif pays)',storePhone:'Téléphone',storeAddress:'Adresse',currencyCode:'Code de devise',currencyLabel:'Symbole de devise',defaultLanguage:'Langue par défaut',saveSettings:'Enregistrer les paramètres',paymentManagement:'PAIEMENTS',paymentSettings:'Moyens de paiement',paymentSettingsNote:'Renseignez uniquement les coordonnées officielles. Aucun paiement n’est vérifié automatiquement.',savePaymentSettings:'Enregistrer les moyens de paiement',accountProtection:'PROTECTION DU COMPTE',changePassword:'Changer le mot de passe',newPassword:'Nouveau mot de passe',confirmPassword:'Confirmer le mot de passe',updatePassword:'Mettre à jour',addedToCart:'Ajouté au panier.',emptyProductsTitle:'La collection est en préparation',emptyProductsText:'Aucun produit publié pour le moment.',noSearchTitle:'Pièce introuvable',noSearchText:'Essayez un autre terme ou une autre catégorie.',chooseVariant:'Choisissez une variante avant l’ajout.',outOfStock:'Rupture de stock',addToBag:'Ajouter au panier',onSale:'Promotion',featuredBadge:'Vedette',noDescription:'Une pièce sélectionnée par Vani Elegance.',remove:'Retirer',edit:'Modifier',delete:'Supprimer',activate:'Activer',deactivate:'Désactiver',noCategories:'Aucune catégorie.',noOrders:'Aucune commande enregistrée.',noProductsAdmin:'Aucun produit. Cliquez sur « Nouveau produit ».',categoryDeleted:'Catégorie supprimée.',categorySaved:'Catégorie enregistrée.',productSaved:'Produit enregistré.',productDeleted:'Produit supprimé.',productToggled:'État du produit mis à jour.',orderStatusSaved:'État de la commande mis à jour.',settingsSaved:'Paramètres enregistrés.',paymentsSaved:'Moyens de paiement enregistrés.',passwordUpdated:'Mot de passe mis à jour.',loginFailed:'Connexion impossible.',notAdmin:'Ce compte n’est pas administrateur.',connectionError:'Connexion à la base de données impossible.',noWhatsApp:'Le numéro WhatsApp de la boutique n’est pas configuré.',emptyCart:'Votre panier est vide.',checkoutEmpty:'Ajoutez au moins une pièce.',orderFailed:'Impossible d’enregistrer la commande.',requiredFields:'Remplissez les champs obligatoires.',variantFormatError:'Format de variante incorrect : Taille | Couleur | SKU | Prix | Stock.',imageUploadFailed:'Chargement de l’image impossible.',partialSave:'Produit enregistré, mais erreur lors de l’enregistrement des variantes.',paymentAccount:'Coordonnées de paiement',accountName:'Nom du compte',accountNumber:'Numéro/compte',bankName:'Nom de la banque',instructions:'Instructions pour le client',enabledMethod:'Moyen actif',status:'État',customer:'Client',total:'Total',date:'Date',items:'Articles',address:'Adresse',reference:'Référence',method:'Moyen',saving:'Enregistrement…',saved:'Enregistré',confirmEmailReset:'Saisissez l’email du compte administrateur :',recoveryTitle:'Définir un nouveau mot de passe',recoveryDescription:'Choisissez un nouveau mot de passe pour récupérer l’accès à la boutique.',recoverySave:'Enregistrer le nouveau mot de passe',resetSent:'Si cet email existe, un message de récupération sera envoyé.',invalidPassword:'Les mots de passe diffèrent ou sont trop courts.',productNoStock:'Produit en rupture de stock.',stockShort:'Stock insuffisant.',rpcInvalidProduct:'Un produit n’est plus disponible. Actualisez le panier.',rpcPaymentUnavailable:'Moyen de paiement indisponible.',rpcReferenceTooLong:'La référence ne peut dépasser 120 caractères.',rpcAddressRequired:'Indiquez l’adresse de livraison.',orderWhatsappMessage:'Bonjour ! Ma commande {number} chez Vani Elegance est enregistrée. Total estimé : {total}. Paiement à vérifier.',manage:'Gérer',noPhoto:'Sans image',unit:'article(s)',ordersNotPaymentProof:'Une commande ne confirme pas la réception du paiement.'
    },
    es: {
      announcement:'Moda elegante · Pedido sencillo · Seguimiento por WhatsApp',brandSub:'MODA CON ELEGANCIA',navHome:'Inicio',navCollection:'Colección',navBrand:'La marca',navContact:'Contacto',language:'Idioma',cart:'Bolsa',heroEyebrow:'NUEVA COLECCIÓN',heroTitle:'Elegancia que viste tu historia',heroText:'Descubre prendas elegidas para realzar tu estilo, con calidad y acabados cuidados.',explore:'Explorar colección',talkToUs:'Hable con nosotros',heroNote:'Prendas seleccionadas con cuidado para ti.',styleNote:'ESTILO · CONFIANZA · DETALLE',curated:'SELECCIÓN CON INTENCIÓN',promise1Title:'Pedido sencillo',promise1Text:'Elige tus prendas en pocos pasos.',promise2Title:'Varios métodos de pago',promise2Text:'Consulta las opciones al finalizar.',promise3Title:'Seguimiento por WhatsApp',promise3Text:'Recibe el resumen de tu pedido.',categoriesEyebrow:'ENCUENTRA TU ESTILO',collectionTitle:'La colección',collectionText:'Explora, filtra y encuentra tu prenda.',pieces:'PRENDAS',all:'Todos',searchPlaceholder:'Buscar en la colección…',sort:'Ordenar',sortFeatured:'Destacados primero',sortNewest:'Más recientes',sortPriceAsc:'Precio: menor a mayor',sortPriceDesc:'Precio: mayor a menor',sortSale:'Promociones primero',loading:'Cargando…',storyCaption:'La belleza está en los detalles.',storyEyebrow:'NUESTRA ESENCIA',storyTitle:'La marca Vani Elegance',storyText:'Vani Elegance nace del deseo de vestir con sofisticación y autenticidad. Cada prenda se elige pensando en la comodidad, los detalles y la confianza.',qualityTitle:'Calidad',qualityText:'Prendas seleccionadas con atención al acabado.',styleTitle:'Estilo',styleText:'Diseño elegante para cada día y ocasiones especiales.',trustTitle:'Confianza',trustText:'Cada pedido tiene un número único y seguimiento.',contactEyebrow:'ESTAMOS CERCA',contactTitle:'Contacto',contactText:'Estamos disponibles para ayudarte a encontrar la prenda adecuada.',talkWhatsApp:'Contactar por WhatsApp',footerTagline:'Moda con elegancia y confianza.',privateArea:'Área privada',yourSelection:'TU SELECCIÓN',yourBag:'Tu bolsa',subtotal:'Subtotal',checkoutNote:'El total final se calcula y valida al enviar el pedido.',continueCheckout:'Continuar al pedido →',continueShopping:'Seguir comprando',almostThere:'YA CASI',finishOrder:'Finalizar pedido',fullName:'Nombre completo *',phone:'Teléfono *',deliveryAddress:'Dirección de entrega *',paymentMethod:'Método de pago *',paymentReference:'Referencia de pago (opcional)',referenceWarning:'La referencia no confirma el pago. La tienda debe verificarla por separado.',orderTotal:'Total estimado',placeOrder:'Crear pedido y continuar →',orderConsent:'El pedido se registra después de la confirmación del servidor.',orderCreated:'Pedido registrado',orderNumberLabel:'Número de pedido',whatsAppNext:'Abre WhatsApp para enviar el resumen del pedido.',openWhatsApp:'Abrir WhatsApp ↗',closeWindow:'Cerrar',ownerPanel:'PANEL DE LA TIENDA',adminWelcome:'La elegancia comienza con una buena gestión.',secureAccess:'ACCESO SEGURO',welcomeBack:'Bienvenida de nuevo',loginDescription:'Accede con la cuenta administradora.',email:'Email',password:'Contraseña',signIn:'Iniciar sesión',forgotPassword:'¿Olvidaste la contraseña?',logout:'Salir',overview:'Resumen',products:'Productos',categories:'Categorías',orders:'Pedidos',settings:'Tienda',payments:'Pagos',security:'Seguridad',todayAtStore:'RESUMEN DE LA TIENDA',overviewTitle:'Tu tienda en un solo lugar',refresh:'Actualizar ↻',registeredProducts:'Productos registrados',ordersRegistered:'Pedidos registrados',pendingOrders:'Pendientes',needAttention:'Necesitan atención',activeCategories:'Categorías activas',realDataTitle:'Datos reales de la tienda',realDataText:'Los datos vienen de la base de datos. Solo aparecen productos y pedidos realmente registrados.',catalogManagement:'CATÁLOGO',manageProducts:'Gestionar productos',newProduct:'+ Nuevo producto',productName:'Nombre del producto *',category:'Categoría',noCategory:'Sin categoría',priceMT:'Precio (MT) *',comparePrice:'Precio anterior',description:'Descripción',mainImageUrl:'URL de imagen principal',uploadImage:'O subir imagen',imageUploadNote:'La imagen se guarda en Supabase Storage.',stock:'Stock (vacío = ilimitado)',featured:'Producto destacado',active:'Activo en la tienda',variants:'Variantes (una por línea)',variantFormat:'Formato: Talla | Color | SKU | Precio opcional | Stock opcional.',saveProduct:'Guardar producto',cancel:'Cancelar',catalogStructure:'ESTRUCTURA DEL CATÁLOGO',manageCategories:'Gestionar categorías',categoryName:'Nombre de categoría',saveCategory:'Guardar categoría',orderManagement:'SEGUIMIENTO',manageOrders:'Gestionar pedidos',filterStatus:'Filtrar estado',allStatuses:'Todos los estados',storeIdentity:'IDENTIDAD',storeSettings:'Ajustes de la tienda',storeName:'Nombre de la tienda',logoUrl:'URL del logotipo',storeWhatsApp:'WhatsApp (con prefijo del país)',storePhone:'Teléfono',storeAddress:'Dirección',currencyCode:'Código de moneda',currencyLabel:'Símbolo de moneda',defaultLanguage:'Idioma predeterminado',saveSettings:'Guardar ajustes',paymentManagement:'COBROS',paymentSettings:'Métodos de pago',paymentSettingsNote:'Introduce solo datos oficiales. El pago no se verifica automáticamente.',savePaymentSettings:'Guardar métodos de pago',accountProtection:'PROTECCIÓN DE CUENTA',changePassword:'Cambiar contraseña',newPassword:'Nueva contraseña',confirmPassword:'Confirmar contraseña',updatePassword:'Actualizar contraseña',addedToCart:'Añadido a la bolsa.',emptyProductsTitle:'La colección se está preparando',emptyProductsText:'Todavía no hay productos publicados.',noSearchTitle:'No encontramos esa prenda',noSearchText:'Prueba otra palabra o categoría.',chooseVariant:'Elige una variante antes de añadir.',outOfStock:'Sin stock',addToBag:'Añadir a la bolsa',onSale:'Oferta',featuredBadge:'Destacado',noDescription:'Una prenda seleccionada por Vani Elegance.',remove:'Quitar',edit:'Editar',delete:'Eliminar',activate:'Activar',deactivate:'Desactivar',noCategories:'Todavía no hay categorías.',noOrders:'Todavía no hay pedidos.',noProductsAdmin:'Todavía no hay productos. Pulsa «Nuevo producto».',categoryDeleted:'Categoría eliminada.',categorySaved:'Categoría guardada.',productSaved:'Producto guardado.',productDeleted:'Producto eliminado.',productToggled:'Estado del producto actualizado.',orderStatusSaved:'Estado del pedido actualizado.',settingsSaved:'Ajustes guardados.',paymentsSaved:'Métodos de pago guardados.',passwordUpdated:'Contraseña actualizada.',loginFailed:'No se pudo iniciar sesión.',notAdmin:'Esta cuenta no es administradora.',connectionError:'No se pudo conectar con la base de datos.',noWhatsApp:'La tienda aún no ha configurado WhatsApp.',emptyCart:'Tu bolsa está vacía.',checkoutEmpty:'Añade al menos una prenda.',orderFailed:'No se pudo registrar el pedido.',requiredFields:'Completa todos los campos obligatorios.',variantFormatError:'Formato de variante incorrecto: Talla | Color | SKU | Precio | Stock.',imageUploadFailed:'No se pudo subir la imagen.',partialSave:'Producto guardado, pero hubo un error con las variantes.',paymentAccount:'Datos de pago',accountName:'Titular de la cuenta',accountNumber:'Número/cuenta',bankName:'Nombre del banco',instructions:'Instrucciones para el cliente',enabledMethod:'Método activo',status:'Estado',customer:'Cliente',total:'Total',date:'Fecha',items:'Artículos',address:'Dirección',reference:'Referencia',method:'Método',saving:'Guardando…',saved:'Guardado',confirmEmailReset:'Introduce el email de la administradora:',resetSent:'Si el email existe, recibirás un mensaje de recuperación.',invalidPassword:'Las contraseñas no coinciden o son demasiado cortas.',productNoStock:'Este producto no tiene stock.',stockShort:'No hay suficiente stock.',rpcInvalidProduct:'Un producto ya no está disponible. Actualiza la bolsa.',rpcPaymentUnavailable:'Método de pago no disponible.',rpcReferenceTooLong:'La referencia no puede superar 120 caracteres.',rpcAddressRequired:'Indica la dirección de entrega.',orderWhatsappMessage:'¡Hola! Registré el pedido {number} en Vani Elegance. Total estimado: {total}. El pago está pendiente de verificación.',manage:'Gestionar',noPhoto:'Sin imagen',unit:'artículo(s)',ordersNotPaymentProof:'Un pedido registrado no confirma la recepción del pago.'
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  let db = null;
  let language = localStorage.getItem(LANGUAGE_KEY) || 'pt';
  let storeSettings = { id: null, store_name: 'Vani Elegance', whatsapp_number: null, phone: null, email: null, address: null, logo_url: null, currency: 'MZN', currency_label: 'MT', default_language: 'pt' };
  let activeStoreId = null;
  let activeStoreSlug = new URLSearchParams(location.search).get('loja') || localStorage.getItem('vani_active_store_slug') || 'vani-elegance';
  let products = [];
  let categories = [];
  let paymentSettings = [];
  let cart = readCart();
  let activeCategory = 'all';
  let currentAdmin = null;
  let adminProducts = [];
  let adminOrders = [];
  let adminCategories = [];
  let catalogLoadError = false;

  function t(key) { return (I18N[language] && I18N[language][key]) || I18N.pt[key] || key; }
  function escapeHTML(value) { return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
  function slugify(value) { return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'item'; }
  function digits(value) { return String(value || '').replace(/\D/g, ''); }
  function nullableNumber(value) { if (value === '' || value === null || value === undefined) return null; const n = Number(value); return Number.isFinite(n) ? n : null; }
  function formatMoney(value) { const amount = Number(value || 0); const label = storeSettings.currency_label || 'MT'; try { return `${amount.toLocaleString(language === 'en' ? 'en-GB' : language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'pt-MZ', { minimumFractionDigits: amount % 1 ? 2 : 0, maximumFractionDigits: 2 })} ${label}`; } catch (_) { return `${amount} ${label}`; } }
  function formatDate(value) { if (!value) return '—'; try { return new Date(value).toLocaleString(language === 'en' ? 'en-GB' : language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'pt-MZ', { dateStyle: 'medium', timeStyle: 'short' }); } catch (_) { return value; } }
  function readCart() { try { const parsed = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); return Array.isArray(parsed) ? parsed.filter(x => x && x.productId && Number(x.quantity) > 0).map(x => ({ productId: String(x.productId), variantId: x.variantId ? String(x.variantId) : null, quantity: Math.min(999, Math.max(1, Number(x.quantity) || 1)), snapshot: x.snapshot || null })) : []; } catch (_) { return []; } }
  function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); renderCartCount(); }
  function showToast(message, type = 'info', duration = 3600) { const region = $('#toast-region'); if (!region) return; const node = document.createElement('div'); node.className = `toast ${type === 'error' ? 'error' : type === 'success' ? 'success' : ''}`; node.textContent = message; region.appendChild(node); setTimeout(() => node.remove(), duration); }
  function setMessage(element, message, error = false) { if (!element) return; element.textContent = message || ''; element.classList.toggle('error', !!error); }
  function setBusy(button, busy, busyText) { if (!button) return; if (busy) { if (!button.dataset.originalText) button.dataset.originalText = button.textContent; button.disabled = true; button.textContent = busyText || t('saving'); } else { button.disabled = false; if (button.dataset.originalText) { button.textContent = button.dataset.originalText; delete button.dataset.originalText; } } }
  function openOverlay(id) { const el = document.getElementById(id); if (!el) return; el.classList.add('open'); el.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll'); }
  function closeOverlay(id) { const el = document.getElementById(id); if (!el) return; el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); if (!$('.overlay.open')) document.body.classList.remove('no-scroll'); }
  function closeAllOverlays() { $$('.overlay.open').forEach(el => closeOverlay(el.id)); }
  function applyTranslations() {
    document.documentElement.lang = ({pt:'pt-MZ',en:'en',fr:'fr',es:'es'})[language] || 'pt-MZ';
    $$('[data-i18n]').forEach(el => { const value = t(el.dataset.i18n); if (value) el.textContent = value; });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const searchKbd = $('.search-box kbd'); if (searchKbd) searchKbd.hidden = true;
    updateStoreIdentity();
    renderCategories(); renderProducts(); renderCart(); renderCheckoutPayments();
  }
  function updateStoreIdentity() {
    const name = storeSettings.store_name || 'Vani Elegance';
    ['header-store-name','contact-store-name','footer-store-name'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = name; });
    const copy = $('#copyright'); if (copy) copy.textContent = `© ${name}. ${t('privacy') === 'Privacidade' ? 'Todos os direitos reservados.' : 'All rights reserved.'}`;
    const address = $('#store-address'); if (address) address.textContent = storeSettings.address || '';
    const phone = $('#store-phone'); if (phone) phone.textContent = storeSettings.phone || '';
    const email = $('#store-email'); if (email) email.textContent = storeSettings.email || '';
    const wa = $('#contact-whatsapp'); const phoneDigits = digits(storeSettings.whatsapp_number);
    if (wa) { wa.href = phoneDigits ? `https://wa.me/${phoneDigits}` : '#'; wa.hidden = !phoneDigits; }
    const mark = $('#brand-mark');
    if (mark) {
      if (storeSettings.logo_url) mark.innerHTML = `<img alt="" src="${escapeHTML(storeSettings.logo_url)}" style="width:100%;height:100%;object-fit:contain;border-radius:50%">`;
      else mark.textContent = 'VE';
    }
    const paymentSummary = $('#payment-summary');
    if (paymentSummary) paymentSummary.textContent = paymentSettings.filter(x => x.active).map(x => x.method_name || METHOD_NAMES[x.method_code] || x.method_code).join(' · ');
  }
  function sortVariants(list) { return (list || []).filter(v => v.active !== false).sort((a,b) => String(a.size || '').localeCompare(String(b.size || '')) || String(a.color || '').localeCompare(String(b.color || ''))); }
  function variantsFor(product) { return sortVariants(product.product_variants || product.variants || []); }
  function findProduct(id) { return products.find(p => String(p.id) === String(id)) || adminProducts.find(p => String(p.id) === String(id)) || null; }
  function findVariant(product, variantId) { return variantsFor(product).find(v => String(v.id) === String(variantId)) || null; }
  function currentPrice(product, variant) { return variant && variant.price !== null && variant.price !== undefined ? Number(variant.price) : Number(product.price || 0); }
  function productAvailable(product, variant) { if (!product || product.active === false) return false; if (variant && variant.stock !== null && variant.stock !== undefined && Number(variant.stock) <= 0) return false; if (!variant && product.stock !== null && product.stock !== undefined && Number(product.stock) <= 0) return false; return true; }

  async function start() {
    if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
      showToast('A biblioteca Supabase não carregou. Verifique a ligação à internet e o script do index.html.', 'error', 7000);
      $('#products-grid').innerHTML = `<div class="empty-state"><strong>${escapeHTML(t('connectionError'))}</strong><p>Supabase JS não carregou.</p></div>`;
      return;
    }
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    // Keep old cached HTML compatible while the updated static files propagate.
    ['#customer-signup-form [name="invite_code"]','#store-create-form [name="invite_code"]'].forEach(selector=>{const field=$(selector);if(field){field.required=false;field.closest('label')?.remove();}});
    const signupEyebrow=$('#customer-signup-view .eyebrow'); if(signupEyebrow)signupEyebrow.textContent='CRIE A SUA LOJA';
    const signupIntro=$('#customer-signup-view .login-form > p:not(.eyebrow):not(.form-message)'); if(signupIntro)signupIntro.textContent='Qualquer pessoa pode criar a sua própria loja online.';
    const signupButton=$('#customer-signup-form button[type="submit"]'); if(signupButton)signupButton.textContent='Criar conta e loja';
    const loginSignup=$('#open-customer-signup'); if(loginSignup)loginSignup.textContent='Criar a minha loja';
    const storeIntro=$('#store-create-view .login-form > p:not(.eyebrow):not(.form-message)'); if(storeIntro)storeIntro.textContent='Configure os dados básicos da sua loja para começar.';
    $('#language-select').value = language;
    applyTranslations();
    bindEvents();
    await resolveActiveStore();
    await loadPublicData();
    const { data: sessionData } = await db.auth.getSession();
    if (sessionData?.session) currentAdmin = sessionData.session.user;
    window.addEventListener('online', () => loadPublicData());
  }

  function bindEvents() {
    $('#language-select')?.addEventListener('change', event => { language = I18N[event.target.value] ? event.target.value : 'pt'; localStorage.setItem(LANGUAGE_KEY, language); applyTranslations(); });
    $('#menu-toggle')?.addEventListener('click', () => { const nav = $('#main-nav'); nav.classList.toggle('open'); $('#menu-toggle').setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false'); });
    $$('#main-nav a').forEach(a => a.addEventListener('click', () => { $('#main-nav').classList.remove('open'); $('#menu-toggle').setAttribute('aria-expanded','false'); }));
    $('#open-cart')?.addEventListener('click', () => { renderCart(); openOverlay('cart-overlay'); });
    $('#go-checkout')?.addEventListener('click', () => { if (!cart.length) { showToast(t('checkoutEmpty'),'error'); return; } renderCheckoutPayments(); updateCheckoutTotal(); $('#checkout-form').hidden = false; $('#order-success').hidden = true; closeOverlay('cart-overlay'); openOverlay('checkout-overlay'); });
    $('#product-search')?.addEventListener('input', renderProducts);
    $('#sort-select')?.addEventListener('change', renderProducts);
    $('#products-grid')?.addEventListener('change', event => { if (event.target.matches('[data-variant-select]')) updateCardPrice(event.target.closest('.product-card')); });
    $('#products-grid')?.addEventListener('click', event => { const add = event.target.closest('[data-add-product]'); if (add) addToCart(add.dataset.addProduct, add.closest('.product-card')); });
    $('#category-list')?.addEventListener('click', event => { const chip = event.target.closest('[data-category]'); if (!chip) return; activeCategory = chip.dataset.category; renderCategories(); renderProducts(); });
    $('#cart-items')?.addEventListener('click', event => { const button = event.target.closest('[data-cart-action]'); if (!button) return; const id = button.dataset.productId; const variantId = button.dataset.variantId || null; const action = button.dataset.cartAction; const item = cart.find(x => x.productId === id && String(x.variantId || '') === String(variantId || '')); if (!item) return; if (action === 'remove') cart = cart.filter(x => x !== item); else if (action === 'inc') item.quantity = Math.min(999,item.quantity+1); else if (action === 'dec') { item.quantity -= 1; if (item.quantity <= 0) cart = cart.filter(x => x !== item); } saveCart(); renderCart(); });
    $$('[data-close]').forEach(button => button.addEventListener('click', () => closeOverlay(button.dataset.close)));
    $$('.overlay').forEach(overlay => overlay.addEventListener('click', event => { if (event.target === overlay && overlay.id !== 'admin-overlay') closeOverlay(overlay.id); }));
    $('#checkout-payment')?.addEventListener('change', showSelectedPaymentInstructions);
    $('#checkout-form')?.addEventListener('submit', submitCheckout);
    $('#close-success')?.addEventListener('click', () => closeOverlay('checkout-overlay'));
    $('#open-admin')?.addEventListener('click', openAdminArea);
    $('#admin-login-form')?.addEventListener('submit', submitLogin);
    $('#open-customer-signup')?.addEventListener('click', () => showSignupView(true));
    $('#open-customer-signup-public')?.addEventListener('click', async () => {
      await openAdminArea();
      const {data:sessionData}=await db.auth.getSession();
      if(sessionData?.session?.user){
        const user=sessionData.session.user; currentAdmin=user;
        if(await checkAdminRole(user.id)){showAdminDashboard();return;}
        if(await findUserStore(user.id)){showAdminDashboard();return;}
        showStoreCreateView(user);return;
      }
      showSignupView(true);
    });
    $('#back-to-login')?.addEventListener('click', () => showSignupView(false));
    $('#customer-signup-form')?.addEventListener('submit', submitCustomerSignup);
    $('#store-create-form')?.addEventListener('submit', createStoreFromForm);
    $('#store-invitation-form')?.addEventListener('submit', submitCreateInvitation);
    $('#forgot-password')?.addEventListener('click', recoverPassword);
    $('#password-recovery-form')?.addEventListener('submit', submitPasswordRecovery);
    db.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session?.user) showPasswordRecovery();
    });
    $('#admin-logout')?.addEventListener('click', logoutAdmin);
    $$('.admin-tab').forEach(button => button.addEventListener('click', () => switchAdminTab(button.dataset.tab)));
    $('#refresh-admin')?.addEventListener('click', loadAdminDashboard);
    $('#refresh-orders')?.addEventListener('click', loadAdminOrders);
    $('#order-status-filter')?.addEventListener('change', renderAdminOrders);
    $('#new-product-button')?.addEventListener('click', () => showProductForm(null));
    $('#cancel-product-form')?.addEventListener('click', () => { $('#product-form').hidden = true; setMessage($('#product-message'),''); });
    $('#product-form')?.addEventListener('submit', saveProduct);
    $('#admin-products-list')?.addEventListener('click', onAdminProductsClick);
    $('#category-form')?.addEventListener('submit', saveCategory);
    $('#cancel-category-edit')?.addEventListener('click', resetCategoryForm);
    $('#admin-categories-list')?.addEventListener('click', onAdminCategoriesClick);
    $('#store-settings-form')?.addEventListener('submit', saveStoreSettings);
    $('#payment-settings-form')?.addEventListener('submit', savePaymentSettings);
    $('#admin-orders-list')?.addEventListener('click', onAdminOrdersClick);
    $('#password-form')?.addEventListener('submit', updatePassword);
  }

  async function resolveActiveStore() {
    if (!db) return;
    const requested = new URLSearchParams(location.search).get('loja') || 'vani-elegance';
    const { data, error } = await db.from('stores').select('id,name,slug,status').eq('slug',requested).eq('status','active').maybeSingle();
    if (error) console.error('resolve store:',error);
    if (data) setActiveStore(data);
    else if (requested !== 'vani-elegance') {
      const fallback = await db.from('stores').select('id,name,slug,status').eq('slug','vani-elegance').eq('status','active').maybeSingle();
      if (fallback.data) setActiveStore(fallback.data);
    }
  }
  function setActiveStore(store) {
    if (!store?.id || !store?.slug) throw new Error('Não foi possível identificar a loja.');
    activeStoreId = store.id; activeStoreSlug = store.slug;
    localStorage.setItem('vani_active_store_slug',store.slug);
    const url = new URL(location.href);
    if (store.slug === 'vani-elegance') url.searchParams.delete('loja'); else url.searchParams.set('loja',store.slug);
    history.replaceState({},'',url);
  }
  async function findUserStore(userId) {
    const {data,error}=await db.from('store_memberships').select('store_id,role,stores(id,name,slug,status)').eq('user_id',userId).order('created_at',{ascending:true});
    if(error) throw error;
    const stores=(data||[]).map(m=>m.stores).filter(s=>s&&s.status==='active');
    const chosen=stores.find(s=>s.id===activeStoreId)||stores[0];
    if(!chosen) return false;
    setActiveStore(chosen); await loadPublicData(); return true;
  }
  function showStoreCreateView(user) {
    $('#admin-login-view').hidden=true; $('#customer-signup-view').hidden=true;
    $('#password-recovery-view').hidden=true; $('#admin-dashboard').hidden=true;
    $('#store-create-view').hidden=false; $('#admin-logout').hidden=false;
    const form=$('#store-create-form');
    if(form&&user){const m=user.user_metadata||{};
      if(!form.elements.store_name.value)form.elements.store_name.value=m.store_name||'';
      if(!form.elements.logo_url.value)form.elements.logo_url.value=m.logo_url||'';
      if(!form.elements.phone.value)form.elements.phone.value=m.phone||'';
      if(!form.elements.email.value)form.elements.email.value=user.email||'';
    }
  }
  async function createStoreFromForm(event) {
    event.preventDefault(); const form=event.currentTarget; const d=new FormData(form); const button=$('button[type="submit"]',form);
    setMessage($('#store-create-message'),''); setBusy(button,true,'A criar loja…');
    try {
      const {data,error}=await db.rpc('create_store',{
        p_name:String(d.get('store_name')||'').trim(),p_logo_url:String(d.get('logo_url')||'').trim()||null,
        p_phone:String(d.get('phone')||'').trim()||null,p_email:String(d.get('email')||'').trim()||null
      });
      if(error)throw error; const store=Array.isArray(data)?data[0]:data;
      if(!store?.id||!store?.slug)throw new Error('A base de dados não confirmou a criação da loja.');
      setActiveStore(store); await loadPublicData(); form.reset(); showAdminDashboard();
      showToast('Loja criada com sucesso. Já pode cadastrar os seus produtos.','success',7000);
    } catch(error){console.error('create store:',error);setMessage($('#store-create-message'),error.message||'Não foi possível criar a loja.',true);}
    finally{setBusy(button,false);}
  }

  async function loadPublicData() {
    if (!db) return;
    $('#products-grid').innerHTML = `<div class="loading-card"><span class="spinner"></span><p>${escapeHTML(t('loading'))}</p></div>`;
    catalogLoadError = false;
    const results = await Promise.allSettled([
      db.from('store_settings').select('*').eq('store_id', activeStoreId).limit(1).maybeSingle(),
      db.from('categories').select('*').eq('store_id', activeStoreId).eq('active', true).order('sort_order').order('name'),
      db.from('products').select('*, categories(id,name,slug,active), product_variants(*)').eq('store_id', activeStoreId).eq('active', true).order('featured', { ascending: false }).order('created_at', { ascending: false }),
      db.from('payment_settings').select('*').eq('store_id', activeStoreId).eq('active', true).order('sort_order').order('method_name')
    ]);
    const [settingsResult, categoriesResult, productsResult, paymentsResult] = results.map(r => r.status === 'fulfilled' ? r.value : { error: r.reason });
    if (settingsResult.error) console.error('store_settings:', settingsResult.error); else if (settingsResult.data) storeSettings = { ...storeSettings, ...settingsResult.data };
    if (categoriesResult.error) { console.error('categories:', categoriesResult.error); catalogLoadError = true; } else categories = categoriesResult.data || [];
    if (productsResult.error) { console.error('products:', productsResult.error); catalogLoadError = true; } else products = productsResult.data || [];
    if (paymentsResult.error) console.error('payment_settings:', paymentsResult.error); else paymentSettings = paymentsResult.data || [];
    if (!localStorage.getItem(LANGUAGE_KEY) && ['pt','en','fr','es'].includes(storeSettings.default_language)) language = storeSettings.default_language;
    $('#language-select').value = language;
    applyTranslations();
    renderCart();
    if (catalogLoadError) showToast(t('connectionError'),'error',5000);
  }

  function renderCategories() {
    const el = $('#category-list'); if (!el) return;
    const label = c => c.name || c.slug || '';
    el.innerHTML = `<button class="category-chip ${activeCategory === 'all' ? 'active' : ''}" data-category="all">${escapeHTML(t('all'))}</button>` + categories.map(c => `<button class="category-chip ${activeCategory === String(c.id) ? 'active' : ''}" data-category="${escapeHTML(c.id)}">${escapeHTML(label(c))}</button>`).join('');
  }
  function renderProducts() {
    const grid = $('#products-grid'); if (!grid) return;
    const query = String($('#product-search')?.value || '').trim().toLocaleLowerCase(language);
    const sort = $('#sort-select')?.value || 'featured';
    let list = products.filter(p => activeCategory === 'all' || String(p.category_id || '') === String(activeCategory));
    if (query) list = list.filter(p => `${p.name || ''} ${p.description || ''} ${p.categories?.name || ''} ${variantsFor(p).map(v => `${v.size || ''} ${v.color || ''} ${v.sku || ''}`).join(' ')}`.toLocaleLowerCase(language).includes(query));
    if (sort === 'newest') list.sort((a,b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    else if (sort === 'priceAsc') list.sort((a,b) => Number(a.price) - Number(b.price));
    else if (sort === 'priceDesc') list.sort((a,b) => Number(b.price) - Number(a.price));
    else if (sort === 'sale') list.sort((a,b) => Number(!!b.compare_price) - Number(!!a.compare_price) || Number(!!b.featured)-Number(!!a.featured));
    else list.sort((a,b) => Number(!!b.featured)-Number(!!a.featured) || new Date(b.created_at || 0)-new Date(a.created_at || 0));
    $('#collection-count').innerHTML = `${String(list.length).padStart(2,'0')} <small>${escapeHTML(t('pieces'))}</small>`;
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state"><strong>${escapeHTML(query || activeCategory !== 'all' ? t('noSearchTitle') : catalogLoadError ? t('connectionError') : t('emptyProductsTitle'))}</strong><p>${escapeHTML(query || activeCategory !== 'all' ? t('noSearchText') : catalogLoadError ? 'Verifique as permissões RLS e a ligação à internet.' : t('emptyProductsText'))}</p></div>`;
      $('#catalog-feedback').textContent = ''; return;
    }
    grid.innerHTML = list.map(renderProductCard).join('');
    $('#catalog-feedback').textContent = `${list.length} ${t('pieces').toLowerCase()}`;
  }
  function renderProductCard(p) {
    const variations = variantsFor(p);
    const unavailable = variations.length ? variations.every(v => !productAvailable(p,v)) : !productAvailable(p,null);
    const image = p.image_url ? `<img class="product-image" src="${escapeHTML(p.image_url)}" alt="${escapeHTML(p.name)}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="image-placeholder" hidden>VE</div>` : `<div class="image-placeholder">VE</div>`;
    const badges = p.compare_price && Number(p.compare_price) > Number(p.price) ? `<span class="product-badge">${escapeHTML(t('onSale'))}</span>` : p.featured ? `<span class="product-badge">${escapeHTML(t('featuredBadge'))}</span>` : '';
    const variantControls = variations.length ? `<div class="product-options"><select data-variant-select aria-label="${escapeHTML(t('variants'))}"><option value="">${escapeHTML(t('variants'))} *</option>${variations.map(v => { const label = [v.size,v.color].filter(Boolean).join(' / ') || v.sku || t('variants'); const price = currentPrice(p,v); const disabled = !productAvailable(p,v); return `<option value="${escapeHTML(v.id)}" data-price="${price}" ${disabled?'disabled':''}>${escapeHTML(label)}${v.price != null ? ` — ${escapeHTML(formatMoney(price))}` : ''}${disabled ? ` — ${escapeHTML(t('outOfStock'))}` : ''}</option>`; }).join('')}</select></div>` : '';
    const priceLabel = p.compare_price && Number(p.compare_price) > Number(p.price) ? `<span class="product-old-price">${escapeHTML(formatMoney(p.compare_price))}</span>` : '';
    return `<article class="product-card" data-product-card="${escapeHTML(p.id)}"><div class="product-image-wrap">${image}${badges}<button class="product-fave" type="button" aria-label="${escapeHTML(t('addToBag'))}" data-add-product="${escapeHTML(p.id)}">＋</button></div><div class="product-info-top"><div><p class="product-category">${escapeHTML(p.categories?.name || t('noCategory'))}</p><h3 class="product-name">${escapeHTML(p.name)}</h3></div></div>${p.description ? `<p class="product-description">${escapeHTML(p.description)}</p>` : `<p class="product-description">${escapeHTML(t('noDescription'))}</p>`}<div class="product-price-row"><span class="product-price" data-card-price>${escapeHTML(formatMoney(p.price))}</span>${priceLabel}</div>${variantControls}<button class="product-add" type="button" data-add-product="${escapeHTML(p.id)}" ${unavailable?'disabled':''}><span>${escapeHTML(unavailable ? t('outOfStock') : t('addToBag'))}</span><span>↗</span></button></article>`;
  }
  function updateCardPrice(card) {
    if (!card) return;
    const p = findProduct(card.dataset.productCard); if (!p) return;
    const select = $('[data-variant-select]',card); const variant = select?.value ? findVariant(p,select.value) : null;
    const price = $('[data-card-price]',card); if (price) price.textContent = formatMoney(currentPrice(p,variant));
  }
  function addToCart(productId, card) {
    const p = findProduct(productId); if (!p) { showToast(t('rpcInvalidProduct'),'error'); return; }
    const variants = variantsFor(p); const select = card ? $('[data-variant-select]',card) : null;
    let variantId = null; let variant = null;
    if (variants.length) { if (!select?.value) { showToast(t('chooseVariant'),'error'); select?.focus(); return; } variantId = select.value; variant = findVariant(p,variantId); }
    if (!productAvailable(p,variant)) { showToast(t('productNoStock'),'error'); return; }
    const existing = cart.find(x => x.productId === String(p.id) && String(x.variantId || '') === String(variantId || ''));
    if (existing) existing.quantity = Math.min(999, existing.quantity + 1); else cart.push({ productId:String(p.id), variantId:variantId ? String(variantId) : null, quantity:1, snapshot:{ name:p.name, image_url:p.image_url || null, price:currentPrice(p,variant), variant_text: variant ? [variant.size,variant.color].filter(Boolean).join(' / ') : '' } });
    saveCart(); renderCart(); showToast(t('addedToCart'),'success');
  }
  function cartResolved(item) {
    const p = findProduct(item.productId);
    if (!p) return { item, p:null, variant:null, name:item.snapshot?.name || 'Produto', image:item.snapshot?.image_url || null, price:Number(item.snapshot?.price || 0), variantText:item.snapshot?.variant_text || '', available:false };
    const variant = item.variantId ? findVariant(p,item.variantId) : null;
    const available = p.active !== false && (!item.variantId || !!variant) && productAvailable(p,variant);
    return { item,p,variant,name:p.name,image:p.image_url || null,price:currentPrice(p,variant),variantText:variant ? [variant.size,variant.color].filter(Boolean).join(' / ') : '',available };
  }
  function cartTotal() { return cart.reduce((sum,item) => { const r = cartResolved(item); return sum + r.price * item.quantity; },0); }
  function renderCartCount() { const el = $('#cart-count'); if (el) el.textContent = cart.reduce((sum,x) => sum + Number(x.quantity || 0),0); }
  function renderCart() {
    renderCartCount(); const container = $('#cart-items'); if (!container) return;
    if (!cart.length) { container.innerHTML = `<div class="cart-empty">${escapeHTML(t('emptyCart'))}</div>`; }
    else container.innerHTML = cart.map(item => {
      const r = cartResolved(item); const id = escapeHTML(item.productId); const variantId = escapeHTML(item.variantId || '');
      const img = r.image ? `<img class="cart-line-image" src="${escapeHTML(r.image)}" alt="" onerror="this.style.visibility='hidden'">` : `<div class="cart-line-image image-placeholder">VE</div>`;
      return `<article class="cart-line">${img}<div><h3 class="cart-line-title">${escapeHTML(r.name)}</h3><p class="cart-line-meta">${escapeHTML(r.variantText || '')}${!r.available ? ` · ${escapeHTML(t('outOfStock'))}` : ''}</p><span class="cart-line-price">${escapeHTML(formatMoney(r.price))}</span><div class="quantity-control"><button type="button" aria-label="Diminuir" data-cart-action="dec" data-product-id="${id}" data-variant-id="${variantId}">−</button><span>${item.quantity}</span><button type="button" aria-label="Aumentar" data-cart-action="inc" data-product-id="${id}" data-variant-id="${variantId}">+</button></div><button type="button" class="remove-line" data-cart-action="remove" data-product-id="${id}" data-variant-id="${variantId}">${escapeHTML(t('remove'))}</button></div><strong class="cart-line-price">${escapeHTML(formatMoney(r.price * item.quantity))}</strong></article>`;
    }).join('');
    $('#cart-total').textContent = formatMoney(cartTotal()); updateCheckoutTotal();
  }
  function updateCheckoutTotal() { const el = $('#checkout-total'); if (el) el.textContent = formatMoney(cartTotal()); }

  function renderCheckoutPayments() {
    const select = $('#checkout-payment'); if (!select) return;
    const current = select.value;
    const activeMethods = paymentSettings.filter(m => m.active);
    select.innerHTML = `<option value="">${escapeHTML(t('paymentMethod'))}</option>` + activeMethods.map(m => `<option value="${escapeHTML(m.method_code)}">${escapeHTML(m.method_name || METHOD_NAMES[m.method_code] || m.method_code)}</option>`).join('');
    if (activeMethods.some(m => m.method_code === current)) select.value = current;
    showSelectedPaymentInstructions();
  }
  function showSelectedPaymentInstructions() {
    const box = $('#payment-instructions'); const code = $('#checkout-payment')?.value; const method = paymentSettings.find(x => x.method_code === code);
    if (!box) return;
    if (!method) { box.hidden = true; box.textContent = ''; return; }
    const rows = [];
    if (method.account_name) rows.push(`${t('accountName')}: ${method.account_name}`);
    if (method.account_number) rows.push(`${t('accountNumber')}: ${method.account_number}`);
    if (method.bank_name) rows.push(`${t('bankName')}: ${method.bank_name}`);
    if (method.instructions) rows.push(method.instructions);
    box.textContent = rows.length ? rows.join('\n') : t('paymentInfoMissing'); box.hidden = false;
  }
  function normalizeRpcError(error) {
    const message = String(error?.message || error?.details || error || '');
    const known = [
      ['INVALID_CUSTOMER_NAME',t('requiredFields')],['INVALID_CUSTOMER_PHONE',t('requiredFields')],['INVALID_DELIVERY_ADDRESS',t('rpcAddressRequired')],['INVALID_PAYMENT_REFERENCE',t('rpcReferenceTooLong')],['INVALID_PRODUCT_ID',t('rpcInvalidProduct')],['INVALID_VARIANT_ID',t('rpcInvalidProduct')],['PRODUCT_UNAVAILABLE',t('rpcInvalidProduct')],['VARIANT_UNAVAILABLE',t('rpcInvalidProduct')],['INSUFFICIENT_STOCK',t('stockShort')],['PAYMENT_METHOD_UNAVAILABLE',t('rpcPaymentUnavailable')],['INVALID_PAYMENT_METHOD',t('rpcPaymentUnavailable')],['EMPTY_ORDER',t('checkoutEmpty')]
    ];
    for (const [needle,text] of known) if (message.includes(needle)) return text;
    return `${t('orderFailed')} ${message}`;
  }
  async function submitCheckout(event) {
    event.preventDefault();
    if (!db || !cart.length) { showToast(t('checkoutEmpty'),'error'); return; }
    const form = event.currentTarget; if (!form.reportValidity()) return;
    const data = new FormData(form); const paymentReference = String(data.get('payment_reference') || '').trim();
    if (paymentReference.length > 120) { showToast(t('rpcReferenceTooLong'),'error'); return; }
    const items = cart.map(item => ({ product_id:item.productId, ...(item.variantId ? { variant_id:item.variantId } : {}), qty:item.quantity }));
    const payload = { store_id:activeStoreId, customer_name:String(data.get('customer_name') || '').trim(), customer_phone:String(data.get('customer_phone') || '').trim(), delivery_address:String(data.get('delivery_address') || '').trim(), payment_method:String(data.get('payment_method') || ''), payment_reference:paymentReference || null, items };
    if (!payload.customer_name || !payload.customer_phone || !payload.delivery_address || !payload.payment_method) { showToast(t('requiredFields'),'error'); return; }
    const button = $('#place-order-button'); setBusy(button,true,t('saving'));
    try {
      const { data: result, error } = await db.rpc('create_order', { p_payload: payload });
      if (error) throw error;
      const order = Array.isArray(result) ? result[0] : result;
      if (!order || !order.order_number) throw new Error('O servidor não devolveu um número de pedido válido.');
      const orderNumber = order.order_number;
      const estimatedTotal = order.total ?? cartTotal();
      cart = []; saveCart(); renderCart();
      $('#checkout-form').hidden = true; $('#order-success').hidden = false;
      $('#success-order-number').textContent = orderNumber;
      const phoneNumber = digits(storeSettings.whatsapp_number);
      const message = t('orderWhatsappMessage').replace('{number}',orderNumber).replace('{total}',formatMoney(estimatedTotal));
      const waButton = $('#success-whatsapp');
      if (phoneNumber) { waButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; waButton.hidden = false; }
      else { waButton.href = '#'; waButton.hidden = true; showToast(t('noWhatsApp'),'error'); }
      showToast(t('orderCreatedTitle'),'success');
      form.reset();
    } catch (error) {
      console.error('create_order failed:', error);
      showToast(normalizeRpcError(error),'error',6000);
    } finally { setBusy(button,false); }
  }

  async function openAdminArea() {
    openOverlay('admin-overlay');
    setMessage($('#login-message'),'');
    if (!db) return;
    const { data } = await db.auth.getSession();
    if (data?.session?.user) {
      currentAdmin = data.session.user;
      const allowed = await checkAdminRole(currentAdmin.id);
      if (allowed) { showAdminDashboard(); return; }
      if (await findUserStore(currentAdmin.id)) { showAdminDashboard(); return; }
      showStoreCreateView(currentAdmin); return;
    }
    $('#admin-login-view').hidden = false; $('#customer-signup-view').hidden = true; $('#password-recovery-view').hidden = true; $('#store-create-view').hidden = true; $('#admin-dashboard').hidden = true; $('#admin-logout').hidden = true;
  }
  async function checkAdminRole(userId) {
    if (!userId || !activeStoreId) return false;
    // A administradora geral pode gerir qualquer loja; a restante equipa fica limitada às suas associações.
    if (await checkPlatformAdmin(userId)) return true;
    const {data,error}=await db.from('store_memberships').select('store_id,role').eq('user_id',userId).eq('store_id',activeStoreId).maybeSingle();
    if(error){console.error('store membership:',error);return false;}
    return !!data && ['owner','manager','editor'].includes(data.role);
  }
  async function checkPlatformAdmin(userId) {
    if(!userId)return false; const {data,error}=await db.from('profiles').select('id,role').eq('id',userId).maybeSingle();
    if(error){console.error('platform role:',error);return false;} return data?.role==='admin';
  }
  async function submitLogin(event) {
    event.preventDefault(); if (!db) return;
    const form = event.currentTarget; const data = new FormData(form); const button = $('button[type="submit"]',form); setMessage($('#login-message'),''); setBusy(button,true,t('saving'));
    try {
      const { data: authData, error } = await db.auth.signInWithPassword({ email:String(data.get('email')).trim(), password:String(data.get('password')) });
      if (error) throw error;
      const user = authData?.user || authData?.session?.user;
      if (!user) throw new Error('O Supabase não devolveu uma sessão válida.');
      currentAdmin = user;
      if (await checkAdminRole(user.id)) { form.reset(); showAdminDashboard(); }
      else if (await findUserStore(user.id)) { form.reset(); showAdminDashboard(); }
      else { showStoreCreateView(user); }
    } catch (error) {
      console.error('Admin login:',error);
      const message = `${t('loginFailed')} ${error?.message || ''}`;
      setMessage($('#login-message'),message,true);
    } finally { setBusy(button,false); }
  }

  function showSignupView(show) {
    const signup = $('#customer-signup-view');
    if (!signup) return;
    $('#admin-login-view').hidden = !!show;
    $('#store-create-view').hidden = true;
    signup.hidden = !show;
    $('#password-recovery-view').hidden = true;
    $('#admin-dashboard').hidden = true;
    $('#admin-logout').hidden = true;
    setMessage($('#signup-message'),'');
  }

  async function submitCustomerSignup(event) {
    event.preventDefault(); if(!db)return;
    const form=event.currentTarget, d=new FormData(form);
    const email=String(d.get('email')||'').trim().toLowerCase();
    const password=String(d.get('password')||''), confirmation=String(d.get('confirm_password')||'');
    const storeName=String(d.get('store_name')||'').trim();
    const msg=$('#signup-message'), button=$('button[type="submit"]',form); setMessage(msg,'');
    if(!storeName||password.length<8||password!==confirmation){setMessage(msg,'Indique o nome da loja e duas palavras-passe iguais com pelo menos 8 caracteres.',true);return;}
    setBusy(button,true,'A criar conta…');
    try{
      const meta={full_name:String(d.get('full_name')||'').trim(),phone:String(d.get('phone')||'').trim(),store_name:storeName,logo_url:String(d.get('logo_url')||'').trim()};
      const {data:res,error}=await db.auth.signUp({email,password,options:{emailRedirectTo:'https://vani-elegance.onrender.com/',data:meta}});
      if(error)throw error; form.reset();
      if(res?.session&&res?.user){
        currentAdmin=res.user; const f=$('#store-create-form');
        f.elements.store_name.value=meta.store_name; f.elements.logo_url.value=meta.logo_url;
        f.elements.phone.value=meta.phone; f.elements.email.value=email;
        showStoreCreateView(res.user); setMessage($('#store-create-message'),'Conta autenticada. Confirme os dados e carregue em “Criar loja”.');
      }else{
        showSignupView(false); const le=$('#admin-login-form input[name="email"]'); if(le)le.value=email;
        const notice='Conta criada. Se receber um email de confirmação, confirme-o e depois entre para concluir a criação da loja.';
        setMessage($('#login-message'),notice); showToast(notice,'success',8000);
      }
    }catch(error){console.error('Store signup:',error);setMessage(msg,error.message||'Não foi possível criar a conta.',true);}
    finally{setBusy(button,false);}
  }

  async function submitCreateInvitation(event) {
    event.preventDefault(); const form=event.currentTarget; const email=String(form.elements.email.value||'').trim().toLowerCase();
    const button=$('button[type="submit"]',form); setMessage($('#invite-message'),'');
    try{setBusy(button,true,'A gerar convite…');const {data,error}=await db.rpc('create_store_invitation',{p_email:email});if(error)throw error;
      const v=Array.isArray(data)?data[0]:data;if(!v?.code)throw new Error('O servidor não devolveu o código.');
      setMessage($('#invite-message'),'Convite para '+v.email+'. Código: '+v.code+'. Válido até '+new Date(v.expires_at).toLocaleString()+'. Envie apenas à pessoa autorizada.');
      form.reset();
    }catch(error){console.error(error);setMessage($('#invite-message'),error.message||'Não foi possível gerar o convite.',true);}
    finally{setBusy(button,false);}
  }

  async function recoverPassword() {
    if (!db) return;
    const email = window.prompt(t('confirmEmailReset'));
    if (!email || !email.trim()) return;
    try {
      const { error } = await db.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: 'https://vani-elegance.onrender.com/'
      });
      if (error) throw error;
      showToast(t('resetSent'),'success',6000);
    } catch (error) {
      console.error('Password recovery request:', error);
      showToast(`${t('loginFailed')} ${error.message || ''}`,'error',7000);
    }
  }

  function showPasswordRecovery() {
    const view = $('#password-recovery-view');
    if (!view) return;
    $('#admin-login-view').hidden = true;
    $('#admin-dashboard').hidden = true;
    $('#admin-logout').hidden = true;
    view.hidden = false;
    openOverlay('admin-overlay');
    setMessage($('#recovery-message'),'');
  }

  async function submitPasswordRecovery(event) {
    event.preventDefault();
    if (!db) return;
    const form = event.currentTarget;
    const password = form.elements.password.value;
    const confirmation = form.elements.confirm_password.value;
    const message = $('#recovery-message');
    const button = $('button[type="submit"]', form);
    if (password.length < 8 || password !== confirmation) {
      setMessage(message,t('invalidPassword'),true);
      return;
    }
    setBusy(button,true,t('saving'));
    try {
      const { data, error } = await db.auth.updateUser({ password });
      if (error) throw error;
      if (!data?.user) throw new Error('O Supabase não confirmou a atualização da palavra-passe.');
      form.reset();
      await db.auth.signOut();
      $('#password-recovery-view').hidden = true;
      $('#admin-login-view').hidden = false;
      $('#admin-dashboard').hidden = true;
      setMessage($('#login-message'),t('passwordUpdated'));
      showToast(t('passwordUpdated'),'success',7000);
    } catch (error) {
      console.error('Password recovery update:',error);
      setMessage(message,error.message || t('connectionError'),true);
    } finally {
      setBusy(button,false);
    }
  }
  async function logoutAdmin() {
    if (!db) return; const { error } = await db.auth.signOut();
    if (error) { showToast(error.message,'error'); return; }
    currentAdmin = null; $('#admin-dashboard').hidden = true; $('#store-create-view').hidden = true; $('#customer-signup-view').hidden = true; $('#password-recovery-view').hidden = true; $('#admin-login-view').hidden = false; $('#admin-login-form').reset(); $('#admin-logout').hidden = true; setMessage($('#login-message'),''); showToast(t('logout'),'success');
  }
  function showAdminDashboard() {
    $('#admin-login-view').hidden = true; $('#customer-signup-view').hidden = true; $('#password-recovery-view').hidden = true; $('#store-create-view').hidden = true; $('#admin-dashboard').hidden = false; $('#admin-logout').hidden = false;
    $('#admin-user-label').textContent = `${currentAdmin?.email || ''} · ${storeSettings.store_name || 'Loja'}`;
    const inviteCard=$('#platform-invite-card'); if(inviteCard) checkPlatformAdmin(currentAdmin?.id).then(isAdmin=>{inviteCard.hidden=!isAdmin;});
    switchAdminTab('overview'); loadAdminDashboard();
  }
  function switchAdminTab(name) {
    $$('.admin-tab').forEach(btn => btn.classList.toggle('active',btn.dataset.tab === name));
    $$('.admin-pane').forEach(pane => pane.classList.toggle('active',pane.dataset.pane === name));
    if (name === 'products') loadAdminProducts();
    if (name === 'categories') loadAdminCategories();
    if (name === 'orders') loadAdminOrders();
    if (name === 'settings') fillStoreSettingsForm();
    if (name === 'payments') loadAdminPayments();
  }
  async function adminRequest(task) {
    const { data: sessionData } = await db.auth.getSession();
    if (!sessionData?.session?.user) throw new Error('A sessão expirou. Entre novamente.');
    if (!(await checkAdminRole(sessionData.session.user.id))) throw new Error('Esta conta não tem acesso a esta loja.');
    return task();
  }
  async function loadAdminDashboard() {
    if (!db || $('#admin-dashboard').hidden) return;
    try {
      await adminRequest(async () => {
        const results = await Promise.all([
          db.from('products').select('id,active',{count:'exact'}).eq('store_id',activeStoreId),
          db.from('orders').select('id,status,created_at,order_number,customer_name,total',{count:'exact'}).eq('store_id',activeStoreId).order('created_at',{ascending:false}).limit(5),
          db.from('categories').select('id,active',{count:'exact'}).eq('store_id',activeStoreId).eq('active',true)
        ]);
        const [p,o,c] = results;
        if (p.error) throw p.error; if (o.error) throw o.error; if (c.error) throw c.error;
        $('#stat-products').textContent = p.count ?? p.data?.length ?? 0;
        $('#stat-orders').textContent = o.count ?? o.data?.length ?? 0;
        $('#stat-pending').textContent = (o.data || []).filter(x => ['pending','awaiting_payment'].includes(x.status)).length;
        $('#stat-categories').textContent = c.count ?? c.data?.length ?? 0;
        $('#recent-orders').innerHTML = `<h4>${escapeHTML(t('orders'))}</h4>` + ((o.data || []).length ? (o.data || []).map(order => `<div class="admin-list-row"><div class="admin-row-main"><strong>${escapeHTML(order.order_number)}</strong><small>${escapeHTML(order.customer_name)} · ${escapeHTML(formatDate(order.created_at))}</small></div><span class="status-pill status-${escapeHTML(order.status)}">${escapeHTML(statusLabel(order.status))}</span><strong>${escapeHTML(formatMoney(order.total))}</strong></div>`).join('') : `<div class="empty-state">${escapeHTML(t('noOrders'))}</div>`);
      });
    } catch (error) { console.error(error); showToast(error.message || t('connectionError'),'error'); }
  }
  function statusLabel(status) { return STATUS_LABELS[status] || status || '—'; }
  async function loadAdminProducts() {
    try {
      await adminRequest(async () => {
        const { data, error } = await db.from('products').select('*, categories(id,name), product_variants(*)').eq('store_id',activeStoreId).order('created_at',{ascending:false});
        if (error) throw error; adminProducts = data || [];
        const { data: cats, error: catError } = await db.from('categories').select('*').eq('store_id',activeStoreId).order('name'); if (catError) throw catError; adminCategories = cats || [];
        fillProductCategorySelect(); renderAdminProducts();
      });
    } catch(error) { console.error(error); $('#admin-products-list').innerHTML = `<div class="empty-state">${escapeHTML(error.message || t('connectionError'))}</div>`; }
  }
  function fillProductCategorySelect(selected = null) {
    const select = $('#product-category'); if (!select) return; const current = selected ?? select.value;
    select.innerHTML = `<option value="">${escapeHTML(t('noCategory'))}</option>` + adminCategories.map(c => `<option value="${escapeHTML(c.id)}">${escapeHTML(c.name)}${c.active ? '' : ' (inativa)'}</option>`).join('');
    select.value = current || '';
  }
  function renderAdminProducts() {
    const el = $('#admin-products-list'); if (!el) return;
    if (!adminProducts.length) { el.innerHTML = `<div class="empty-state"><strong>${escapeHTML(t('noProductsAdmin'))}</strong></div>`; return; }
    el.innerHTML = adminProducts.map(p => `<article class="admin-list-row">${p.image_url ? `<img src="${escapeHTML(p.image_url)}" alt="" onerror="this.style.visibility='hidden'">` : `<div class="admin-thumb image-placeholder">VE</div>`}<div class="admin-row-main"><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.categories?.name || t('noCategory'))} · ${escapeHTML(formatMoney(p.price))}${p.stock == null ? '' : ` · Stock: ${p.stock}`}</small><small>${p.active ? `<span class="status-pill status-active">${escapeHTML(t('active'))}</span>` : `<span class="status-pill">Inativo</span>`}${p.featured ? ' · ★' : ''}</small></div><div class="admin-row-actions"><button class="mini-button" data-product-action="edit" data-id="${escapeHTML(p.id)}">${escapeHTML(t('edit'))}</button><button class="mini-button" data-product-action="toggle" data-id="${escapeHTML(p.id)}">${escapeHTML(p.active ? t('deactivate') : t('activate'))}</button><button class="mini-button danger" data-product-action="delete" data-id="${escapeHTML(p.id)}">${escapeHTML(t('delete'))}</button></div></article>`).join('');
  }
  function showProductForm(product) {
    const form = $('#product-form'); form.hidden = false; form.reset(); setMessage($('#product-message'),'');
    if (product) {
      form.elements.id.value = product.id;
      form.elements.name.value = product.name || '';
      form.elements.category_id.value = product.category_id || '';
      form.elements.price.value = product.price ?? '';
      form.elements.compare_price.value = product.compare_price ?? '';
      form.elements.description.value = product.description || '';
      form.elements.image_url.value = product.image_url || '';
      form.elements.stock.value = product.stock ?? '';
      form.elements.featured.checked = !!product.featured;
      form.elements.active.checked = !!product.active;
      form.elements.variants.value = variantsFor(product).map(v => [v.size || '',v.color || '',v.sku || '',v.price ?? '',v.stock ?? ''].join(' | ')).join('\n');
    } else { form.elements.id.value = ''; form.elements.active.checked = true; form.elements.featured.checked = false; }
    form.scrollIntoView({behavior:'smooth',block:'start'});
  }
  async function uploadProductImage(file) {
    if (!file) return null;
    if (!file.type.startsWith('image/')) throw new Error('O ficheiro selecionado não é uma imagem.');
    if (file.size > 8 * 1024 * 1024) throw new Error('A imagem deve ter no máximo 8 MB.');
    const clean = file.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9._-]+/g,'-').slice(-100) || 'imagem';
    const path = `stores/${activeStoreId}/products/${Date.now()}-${crypto.randomUUID().slice(0,8)}-${clean}`;
    const { error } = await db.storage.from(STORAGE_BUCKET).upload(path,file,{upsert:false,contentType:file.type,cacheControl:'3600'});
    if (error) throw error;
    const { data } = db.storage.from(STORAGE_BUCKET).getPublicUrl(path);
    if (!data?.publicUrl) throw new Error('O Supabase não devolveu o URL público da imagem.');
    return data.publicUrl;
  }
  function parseVariants(text) {
    if (!String(text || '').trim()) return [];
    const rows = String(text).split(/\r?\n/).map(x => x.trim()).filter(Boolean);
    return rows.map((row, index) => {
      const parts = row.split('|').map(x => x.trim());
      if (parts.length < 2 || parts.length > 5) throw new Error(`${t('variantFormatError')} (linha ${index+1})`);
      const [size='',color='',sku='',priceText='',stockText=''] = parts;
      const price = nullableNumber(priceText); const stock = nullableNumber(stockText);
      if (price !== null && price < 0) throw new Error(`${t('variantFormatError')} (preço da linha ${index+1})`);
      if (stock !== null && (!Number.isInteger(stock) || stock < 0)) throw new Error(`${t('variantFormatError')} (stock da linha ${index+1})`);
      return { size:size || null, color:color || null, sku:sku || null, price, stock, active:true };
    });
  }
  async function saveProduct(event) {
    event.preventDefault(); const form = event.currentTarget; const button = $('#save-product-button'); setMessage($('#product-message'),'');
    if (!form.reportValidity()) return;
    try {
      await adminRequest(async () => {
        setBusy(button,true,t('saving'));
        const id = form.elements.id.value || null;
        const name = form.elements.name.value.trim();
        const file = form.elements.image_file.files?.[0];
        const variants = parseVariants(form.elements.variants.value);
        let imageUrl = form.elements.image_url.value.trim() || null;
        if (file) imageUrl = await uploadProductImage(file);
        const payload = {
          store_id:activeStoreId,
          name, slug:`${slugify(name)}-${(id || crypto.randomUUID()).slice(0,8)}`,
          category_id:form.elements.category_id.value || null,
          description:form.elements.description.value.trim() || null,
          price:Number(form.elements.price.value), compare_price:nullableNumber(form.elements.compare_price.value),
          image_url:imageUrl, stock:nullableNumber(form.elements.stock.value),
          featured:form.elements.featured.checked, active:form.elements.active.checked, updated_at:new Date().toISOString()
        };
        let savedProduct;
        if (id) {
          const { data,error } = await db.from('products').update(payload).eq('id',id).eq('store_id',activeStoreId).select('*').single(); if (error) throw error; savedProduct = data;
        } else {
          const { data,error } = await db.from('products').insert(payload).select('*').single(); if (error) throw error; savedProduct = data;
        }
        try {
          const { error: deleteVariantError } = await db.from('product_variants').delete().eq('product_id',savedProduct.id); if (deleteVariantError) throw deleteVariantError;
          if (variants.length) {
            const rows = variants.map(v => ({...v,product_id:savedProduct.id}));
            const { error: variantError } = await db.from('product_variants').insert(rows); if (variantError) throw variantError;
          }
        } catch (variantError) { console.error('Variants save:',variantError); setMessage($('#product-message'),`${t('partialSave')} ${variantError.message || ''}`,true); throw new Error('VARIANT_SAVE_PARTIAL'); }
        setMessage($('#product-message'),t('productSaved'));
        showToast(t('productSaved'),'success');
        form.hidden = true; form.reset(); await Promise.all([loadAdminProducts(),loadPublicData(),loadAdminDashboard()]);
      });
    } catch (error) { console.error('saveProduct:',error); if (error.message !== 'VARIANT_SAVE_PARTIAL') { setMessage($('#product-message'),error.message || t('connectionError'),true); showToast(error.message || t('connectionError'),'error',6000); } }
    finally { setBusy(button,false); }
  }
  async function onAdminProductsClick(event) {
    const button = event.target.closest('[data-product-action]'); if (!button) return;
    const product = adminProducts.find(p => String(p.id) === String(button.dataset.id)); if (!product) return;
    try {
      await adminRequest(async () => {
        if (button.dataset.productAction === 'edit') { showProductForm(product); return; }
        if (button.dataset.productAction === 'toggle') {
          const { error,data } = await db.from('products').update({active:!product.active,updated_at:new Date().toISOString()}).eq('id',product.id).eq('store_id',activeStoreId).select('id,active').single(); if (error) throw error; if (!data) throw new Error('A base de dados não confirmou a alteração.');
          showToast(t('productToggled'),'success'); await Promise.all([loadAdminProducts(),loadPublicData()]); return;
        }
        if (button.dataset.productAction === 'delete') {
          if (!window.confirm(`${t('deleteConfirm')}\n${product.name}`)) return;
          const { error:e1 } = await db.from('product_variants').delete().eq('product_id',product.id); if (e1) throw e1;
          const { error:e2 } = await db.from('product_images').delete().eq('product_id',product.id); if (e2) throw e2;
          const { error:e3 } = await db.from('order_items').update({product_id:null}).eq('product_id',product.id); if (e3) throw e3;
          const { data,error:e4 } = await db.from('products').delete().eq('id',product.id).eq('store_id',activeStoreId).select('id').maybeSingle(); if (e4) throw e4; if (!data) throw new Error('A base de dados não confirmou a eliminação.');
          showToast(t('productDeleted'),'success'); await Promise.all([loadAdminProducts(),loadPublicData(),loadAdminDashboard()]);
        }
      });
    } catch(error) { console.error(error); showToast(error.message || t('connectionError'),'error',6000); }
  }

  async function loadAdminCategories() {
    try { await adminRequest(async () => { const {data,error} = await db.from('categories').select('*').eq('store_id',activeStoreId).order('sort_order').order('name'); if (error) throw error; adminCategories = data || []; fillProductCategorySelect(); renderAdminCategories(); }); }
    catch(error) { console.error(error); $('#admin-categories-list').innerHTML = `<div class="empty-state">${escapeHTML(error.message || t('connectionError'))}</div>`; }
  }
  function renderAdminCategories() {
    const el = $('#admin-categories-list'); if (!el) return;
    if (!adminCategories.length) { el.innerHTML = `<div class="empty-state">${escapeHTML(t('noCategories'))}</div>`; return; }
    el.innerHTML = adminCategories.map(c => `<div class="admin-list-row"><div class="admin-row-main"><strong>${escapeHTML(c.name)}</strong><small>${escapeHTML(c.slug)}</small></div><span class="status-pill ${c.active?'status-active':''}">${escapeHTML(c.active?t('active'):'Inativa')}</span><div class="admin-row-actions"><button class="mini-button" data-category-action="edit" data-id="${escapeHTML(c.id)}">${escapeHTML(t('edit'))}</button><button class="mini-button" data-category-action="toggle" data-id="${escapeHTML(c.id)}">${escapeHTML(c.active?t('deactivate'):t('activate'))}</button><button class="mini-button danger" data-category-action="delete" data-id="${escapeHTML(c.id)}">${escapeHTML(t('delete'))}</button></div></div>`).join('');
  }
  function resetCategoryForm() { const form = $('#category-form'); form.reset(); form.elements.id.value = ''; $('#cancel-category-edit').hidden = true; }
  async function saveCategory(event) {
    event.preventDefault(); const form = event.currentTarget; const id = form.elements.id.value || null; const name = form.elements.name.value.trim(); if (!name) return;
    try {
      await adminRequest(async () => {
        const payload = {name,slug:`${slugify(name)}-${(id || crypto.randomUUID()).slice(0,8)}`,updated_at:new Date().toISOString()};
        const result = id ? await db.from('categories').update(payload).eq('id',id).eq('store_id',activeStoreId).select('*').single() : await db.from('categories').insert({...payload,store_id:activeStoreId,active:true}).select('*').single();
        if (result.error) throw result.error; if (!result.data) throw new Error('A base de dados não confirmou a categoria.');
        resetCategoryForm(); showToast(t('categorySaved'),'success'); await Promise.all([loadAdminCategories(),loadPublicData(),loadAdminProducts()]);
      });
    } catch(error) { console.error(error); showToast(error.message || t('connectionError'),'error',6000); }
  }
  async function onAdminCategoriesClick(event) {
    const button = event.target.closest('[data-category-action]'); if (!button) return; const cat = adminCategories.find(c => String(c.id) === String(button.dataset.id)); if (!cat) return;
    try {
      await adminRequest(async () => {
        const action = button.dataset.categoryAction;
        if (action === 'edit') { $('#category-form').elements.id.value = cat.id; $('#category-form').elements.name.value = cat.name; $('#cancel-category-edit').hidden = false; $('#category-form').scrollIntoView({behavior:'smooth'}); return; }
        if (action === 'toggle') { const {error,data} = await db.from('categories').update({active:!cat.active,updated_at:new Date().toISOString()}).eq('id',cat.id).eq('store_id',activeStoreId).select('id,active').single(); if (error) throw error; if (!data) throw new Error('A base de dados não confirmou a alteração.'); await Promise.all([loadAdminCategories(),loadPublicData(),loadAdminProducts()]); showToast(t('categorySaved'),'success'); return; }
        if (action === 'delete') {
          if (!window.confirm(`${t('deleteConfirm')}\n${cat.name}`)) return;
          const {data:used,error:checkError} = await db.from('products').select('id').eq('store_id',activeStoreId).eq('category_id',cat.id).limit(1); if (checkError) throw checkError;
          if ((used || []).length) { const {error,data} = await db.from('categories').update({active:false,updated_at:new Date().toISOString()}).eq('id',cat.id).eq('store_id',activeStoreId).select('id').single(); if (error) throw error; if (!data) throw new Error('A categoria não foi atualizada.'); showToast(t('categoryInUse'),'success',6000); }
          else { const {data,error} = await db.from('categories').delete().eq('id',cat.id).eq('store_id',activeStoreId).select('id').maybeSingle(); if (error) throw error; if (!data) throw new Error('A base de dados não confirmou a eliminação.'); showToast(t('categoryDeleted'),'success'); }
          await Promise.all([loadAdminCategories(),loadPublicData(),loadAdminProducts()]);
        }
      });
    } catch(error) { console.error(error); showToast(error.message || t('connectionError'),'error',6000); }
  }

  async function fillStoreSettingsForm() {
    try { await adminRequest(async () => { const {data,error} = await db.from('store_settings').select('*').eq('store_id',activeStoreId).limit(1).maybeSingle(); if (error) throw error; if (!data) throw new Error('Não existe uma linha em store_settings.'); storeSettings = {...storeSettings,...data}; const form = $('#store-settings-form'); Object.keys(storeSettings).forEach(key => { if (form.elements[key]) form.elements[key].value = storeSettings[key] ?? ''; }); updateStoreIdentity(); }); }
    catch(error) { console.error(error); setMessage($('#settings-message'),error.message || t('connectionError'),true); }
  }
  async function saveStoreSettings(event) {
    event.preventDefault(); const form = event.currentTarget; const button = $('#save-settings-button'); setMessage($('#settings-message'),'');
    try {
      await adminRequest(async () => {
        setBusy(button,true,t('saving'));
        const payload = {store_name:form.elements.store_name.value.trim(),logo_url:form.elements.logo_url.value.trim() || null,whatsapp_number:form.elements.whatsapp_number.value.trim() || null,phone:form.elements.phone.value.trim() || null,email:form.elements.email.value.trim() || null,address:form.elements.address.value.trim() || null,currency:(form.elements.currency.value.trim() || 'MZN').toUpperCase(),currency_label:form.elements.currency_label.value.trim() || 'MT',default_language:form.elements.default_language.value || 'pt',updated_at:new Date().toISOString()};
        if (!storeSettings.id) { const {data,error} = await db.from('store_settings').select('*').eq('store_id',activeStoreId).limit(1).maybeSingle(); if (error) throw error; if (!data) throw new Error('Não existe uma linha em store_settings.'); storeSettings = {...storeSettings,...data}; }
        const {data,error} = await db.from('store_settings').update(payload).eq('id',storeSettings.id).eq('store_id',activeStoreId).select('*').single(); if (error) throw error; if (!data) throw new Error('A base de dados não confirmou as definições.');
        const {error:storeError} = await db.from('stores').update({name:payload.store_name,logo_url:payload.logo_url,phone:payload.phone,email:payload.email,updated_at:new Date().toISOString()}).eq('id',activeStoreId); if (storeError) throw storeError;
        storeSettings = {...storeSettings,...data}; if (!localStorage.getItem(LANGUAGE_KEY)) language = storeSettings.default_language || language;
        applyTranslations(); setMessage($('#settings-message'),t('settingsSaved')); showToast(t('settingsSaved'),'success');
      });
    } catch(error) { console.error(error); setMessage($('#settings-message'),error.message || t('connectionError'),true); showToast(error.message || t('connectionError'),'error',6000); }
    finally { setBusy(button,false); }
  }

  async function loadAdminPayments() {
    try {
      await adminRequest(async () => { const {data,error} = await db.from('payment_settings').select('*').eq('store_id',activeStoreId).order('sort_order').order('method_name'); if (error) throw error; paymentSettings = data || []; renderAdminPayments(); renderCheckoutPayments(); updateStoreIdentity(); });
    } catch(error) { console.error(error); $('#payment-settings-list').innerHTML = `<div class="empty-state">${escapeHTML(error.message || t('connectionError'))}</div>`; }
  }
  function renderAdminPayments() {
    const list = $('#payment-settings-list'); if (!list) return;
    list.innerHTML = paymentSettings.map(method => `<article class="payment-method-admin" data-payment-code="${escapeHTML(method.method_code)}"><div><h4>${escapeHTML(method.method_name || METHOD_NAMES[method.method_code] || method.method_code)}</h4><label><input type="checkbox" name="active" ${method.active?'checked':''}> <span>${escapeHTML(t('enabledMethod'))}</span></label></div><div class="form-grid"><label><span>${escapeHTML(t('accountName'))}</span><input name="account_name" value="${escapeHTML(method.account_name || '')}" maxlength="180"></label><label><span>${escapeHTML(t('accountNumber'))}</span><input name="account_number" value="${escapeHTML(method.account_number || '')}" maxlength="120"></label></div><label><span>${escapeHTML(t('bankName'))}</span><input name="bank_name" value="${escapeHTML(method.bank_name || '')}" maxlength="180"></label><label><span>${escapeHTML(t('instructions'))}</span><textarea name="instructions" rows="2" maxlength="1000">${escapeHTML(method.instructions || '')}</textarea></label></article>`).join('');
  }
  async function savePaymentSettings(event) {
    event.preventDefault(); const button = $('#save-payments-button'); setMessage($('#payments-message'),'');
    try {
      await adminRequest(async () => {
        setBusy(button,true,t('saving'));
        const cards = $$('.payment-method-admin');
        for (const card of cards) {
          const code = card.dataset.paymentCode;
          const payload = {account_name:$('input[name="account_name"]',card).value.trim() || null,account_number:$('input[name="account_number"]',card).value.trim() || null,bank_name:$('input[name="bank_name"]',card).value.trim() || null,instructions:$('textarea[name="instructions"]',card).value.trim() || null,active:$('input[name="active"]',card).checked,updated_at:new Date().toISOString()};
          const {data,error} = await db.from('payment_settings').update(payload).eq('method_code',code).eq('store_id',activeStoreId).select('id,method_code').single();
          if (error) throw new Error(`${METHOD_NAMES[code] || code}: ${error.message}`); if (!data) throw new Error(`A base de dados não confirmou ${code}.`);
        }
        const {data,error} = await db.from('payment_settings').select('*').eq('store_id',activeStoreId).order('sort_order'); if (error) throw error; paymentSettings = data || [];
        renderCheckoutPayments(); updateStoreIdentity(); setMessage($('#payments-message'),t('paymentsSaved')); showToast(t('paymentsSaved'),'success');
      });
    } catch(error) { console.error(error); setMessage($('#payments-message'),`${error.message || t('connectionError')} Se alguns métodos anteriores já foram guardados, reveja-os antes de sair.`,true); showToast(error.message || t('connectionError'),'error',6000); }
    finally { setBusy(button,false); }
  }

  async function loadAdminOrders() {
    if (!db) return;
    try { await adminRequest(async () => { const {data,error} = await db.from('orders').select('*, order_items(*)').eq('store_id',activeStoreId).order('created_at',{ascending:false}).limit(200); if (error) throw error; adminOrders = data || []; renderAdminOrders(); loadAdminDashboard(); }); }
    catch(error) { console.error(error); $('#admin-orders-list').innerHTML = `<div class="empty-state">${escapeHTML(error.message || t('connectionError'))}</div>`; }
  }
  function renderAdminOrders() {
    const el = $('#admin-orders-list'); if (!el) return;
    const filter = $('#order-status-filter')?.value || 'all';
    const rows = adminOrders.filter(o => filter === 'all' || o.status === filter);
    if (!rows.length) { el.innerHTML = `<div class="empty-state">${escapeHTML(t('noOrders'))}</div>`; return; }
    const statuses = Object.keys(STATUS_LABELS);
    el.innerHTML = rows.map(order => {
      const lines = (order.order_items || []).map(item => `${item.quantity} × ${item.product_name}${item.variant_text ? ` (${item.variant_text})` : ''} — ${formatMoney(item.subtotal)}`).join('\n');
      const lineText = lines || '—';
      return `<article class="order-admin-card" data-order-id="${escapeHTML(order.id)}"><div class="order-admin-head"><div><strong>${escapeHTML(order.order_number)}</strong><small>${escapeHTML(formatDate(order.created_at))}</small></div><span class="status-pill status-${escapeHTML(order.status)}">${escapeHTML(statusLabel(order.status))}</span></div><div class="order-admin-details"><p><b>${escapeHTML(t('customer'))}:</b> ${escapeHTML(order.customer_name)}</p><p><b>${escapeHTML(t('phone'))}:</b> ${escapeHTML(order.customer_phone)}</p><p><b>${escapeHTML(t('method'))}:</b> ${escapeHTML(METHOD_NAMES[order.payment_method] || order.payment_method || '—')}</p><p><b>${escapeHTML(t('total'))}:</b> ${escapeHTML(formatMoney(order.total))}</p><p><b>${escapeHTML(t('address'))}:</b> ${escapeHTML(order.delivery_address || '—')}</p><p><b>${escapeHTML(t('reference'))}:</b> ${escapeHTML(order.payment_reference || '—')}</p></div><div class="order-items-preview">${escapeHTML(lineText)}<br><b>${escapeHTML(t('ordersNotPaymentProof'))}</b></div><div class="order-admin-actions"><label><span class="sr-only">${escapeHTML(t('status'))}</span><select data-order-status>${statuses.map(s => `<option value="${s}" ${order.status===s?'selected':''}>${escapeHTML(statusLabel(s))}</option>`).join('')}</select></label><button class="button button-dark button-small" data-order-action="save-status">${escapeHTML(t('saveSettings'))}</button></div></article>`;
    }).join('');
  }
  async function onAdminOrdersClick(event) {
    const button = event.target.closest('[data-order-action="save-status"]'); if (!button) return;
    const card = button.closest('[data-order-id]'); const id = card?.dataset.orderId; const status = $('[data-order-status]',card)?.value; if (!id || !status) return;
    try {
      await adminRequest(async () => {
        setBusy(button,true,t('saving'));
        const {data,error} = await db.from('orders').update({status,updated_at:new Date().toISOString()}).eq('id',id).eq('store_id',activeStoreId).select('id,status').single(); if (error) throw error; if (!data) throw new Error('A base de dados não confirmou o estado.');
        showToast(t('orderStatusSaved'),'success'); await Promise.all([loadAdminOrders(),loadAdminDashboard()]);
      });
    } catch(error) { console.error(error); showToast(error.message || t('connectionError'),'error',6000); }
    finally { setBusy(button,false); }
  }
  async function updatePassword(event) {
    event.preventDefault(); const form = event.currentTarget; const password = form.elements.password.value; const confirmation = form.elements.confirm_password.value;
    if (password.length < 8 || password !== confirmation) { setMessage($('#password-message'),t('invalidPassword'),true); return; }
    try {
      await adminRequest(async () => { const {data,error} = await db.auth.updateUser({password}); if (error) throw error; if (!data?.user) throw new Error('A atualização da palavra-passe não foi confirmada pelo Supabase.'); form.reset(); setMessage($('#password-message'),t('passwordUpdated')); showToast(t('passwordUpdated'),'success'); });
    } catch(error) { console.error(error); setMessage($('#password-message'),error.message || t('connectionError'),true); }
  }

  document.addEventListener('keydown', event => { if (event.key === 'Escape') { const last = $$('.overlay.open').pop(); if (last && last.id !== 'admin-overlay') closeOverlay(last.id); } });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();