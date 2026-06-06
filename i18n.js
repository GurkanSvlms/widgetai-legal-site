const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "tr", label: "Türkçe" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "pt-BR", label: "Português (Brasil)" }
];

const SITE_TRANSLATIONS = {
  en: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits is an AI life planner for tasks, habits, nutrition, routines, and premium iOS widgets.",
      privacyTitle: "Daily Planner: Work Habits Privacy Policy",
      supportTitle: "Daily Planner: Work Habits Support",
      termsTitle: "Daily Planner: Work Habits Terms of Use"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Features",
      widgets: "Widgets",
      privacy: "Privacy",
      privacyPolicy: "Privacy Policy",
      support: "Support",
      terms: "Terms of Use",
      termsShort: "Terms"
    },
    home: {
      eyebrow: "AI daily planner for iPhone",
      title: "Daily Planner: Work Habits",
      lede: "A focused daily command center for tasks, routines, meals, water, sleep, AI guidance, and premium iPhone widgets.",
      seeWidgets: "See Widgets",
      getSupport: "Get Support",
      briefLabel: "Today Brief",
      briefTitle: "Today looks balanced.",
      briefText: "3 focused tasks, 2 habits, and a lighter dinner target.",
      work: "Work",
      workMetric: "Deep work ready",
      routine: "Routine",
      routineMetric: "Streak protected",
      nutrition: "Nutrition",
      nutritionMetric: "Protein and water goals are on track.",
      focus: "Focus",
      water: "Water",
      sleep: "Sleep",
      habits: "Habits",
      habitsMetric: "5 done",
      featuresTitle: "Work, habits, and health follow one daily plan.",
      workTitle: "Work planning",
      workText: "Tasks, focus blocks, and AI suggestions stay connected in one clear work view.",
      routineTitle: "Habits and routines",
      routineText: "Recurring routines, habit check-ins, and progress streaks use the same flow as the app.",
      nutritionTitle: "Meals and body tracking",
      nutritionText: "Meal logging, water, sleep, and AI meal scans stay readable before saving.",
      widgetsTitle: "Your plan stays visible outside the app.",
      widgetsText: "Premium widgets mirror Daily Planner: work in blue, routines in purple, nutrition in teal, and reward moments in warm gold.",
      privacyEyebrow: "Privacy aware",
      privacyTitle: "Personal data stays local whenever possible.",
      privacyText: "Daily Planner: Work Habits is a personal planning app, so privacy matters. Most app data is stored on your device, Apple handles purchases, and optional permissions are used only for features you enable."
    },
    privacy: {
      title: "Personal planning data deserves a focused design.",
      updated: "Last updated: May 15, 2026",
      overviewLabel: "Overview",
      overviewTitle: "Local whenever possible",
      overviewText: "Daily Planner: Work Habits is a personal productivity, habits, nutrition, and widget app designed to keep your personal data on your device whenever possible.",
      dataLabel: "Data you create",
      dataTitle: "Your daily records",
      dataText: "The app may store tasks, habits, routines, nutrition logs, water logs, sleep entries, profile settings, app preferences, and widget settings locally on your device.",
      permissionsLabel: "Permissions",
      permissionsTitle: "Optional access",
      permissionsText: "Daily Planner: Work Habits may ask for notifications, calendar, reminders, HealthKit, camera, and photo library access. These permissions are used only for features you choose to use.",
      aiLabel: "AI features",
      aiTitle: "Requests need context",
      aiText: "If you use AI chat, suggestions, or meal photo scanning, the text, app context, or selected image required for that request may be sent to the AI service provider.",
      healthLabel: "Health and nutrition",
      healthTitle: "Tracking, not medical advice",
      healthText: "Nutrition and AI meal scan results are estimates for personal tracking only. Health data access is optional and can be managed in iOS Settings.",
      subscriptionsLabel: "Subscriptions",
      subscriptionsTitle: "Apple handles purchases",
      subscriptionsText: "Purchases and subscriptions are processed by Apple through the App Store. Daily Planner: Work Habits does not receive or store your full payment card details.",
      exportLabel: "Export and deletion",
      exportTitle: "Control app data",
      exportText: "You can export or remove app data using in-app tools where available, or by deleting the app from your device. Some Apple-managed purchase records may remain available through your Apple ID.",
      contactLabel: "Contact",
      contactTitle: "Privacy questions",
      contactText: "Email"
    },
    support: {
      title: "Help for your Daily Planner setup.",
      lede: "Questions about widgets, subscriptions, AI meal scans, data, or account settings can start here.",
      contactLabel: "Contact",
      contactTitle: "Email support",
      contactText: "Reach us at",
      subscriptionsLabel: "Subscriptions",
      subscriptionsTitle: "Apple manages billing",
      subscriptionsText: "Subscriptions, refunds, and purchase history are managed by Apple through your Apple ID and App Store account settings.",
      privacyLabel: "Privacy and data",
      privacyTitle: "Local-first records",
      privacyText: "Daily Planner: Work Habits stores most app data locally. You can remove local app data by deleting the app, or use export and restore tools where available.",
      aiLabel: "AI and nutrition",
      aiTitle: "Review estimates",
      aiText: "AI responses and meal scan results are estimates. Review results before saving them and do not rely on them as medical advice."
    },
    terms: {
      title: "Daily Planner: Work Habits uses Apple's Standard EULA.",
      lede: "The app follows Apple's standard license terms for App Store apps.",
      openEula: "Open Apple's Standard EULA",
      licenseLabel: "License",
      licenseTitle: "Standard App Store terms",
      licenseText: "Daily Planner: Work Habits uses Apple's Standard End User License Agreement for app usage terms.",
      purchasesLabel: "Purchases",
      purchasesTitle: "Apple account settings",
      purchasesText: "Subscriptions and purchase management are handled through your Apple ID and App Store settings.",
      questionsTitle: "Questions",
      questionsText: "For product or billing support, contact"
    }
  },
  tr: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits; görevler, alışkanlıklar, beslenme, rutinler ve premium iOS widget'ları için AI destekli bir yaşam planlayıcıdır.",
      privacyTitle: "Daily Planner: Work Habits Gizlilik Politikası",
      supportTitle: "Daily Planner: Work Habits Destek",
      termsTitle: "Daily Planner: Work Habits Kullanım Şartları"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Özellikler",
      widgets: "Widget'lar",
      privacy: "Gizlilik",
      privacyPolicy: "Gizlilik Politikası",
      support: "Destek",
      terms: "Kullanım Şartları",
      termsShort: "Şartlar"
    },
    home: {
      eyebrow: "iPhone için AI günlük planlayıcı",
      title: "Daily Planner: Work Habits",
      lede: "Görevler, rutinler, öğünler, su, uyku, AI rehberliği ve premium iPhone widget'ları için odaklı günlük kontrol merkezi.",
      seeWidgets: "Widget'ları Gör",
      getSupport: "Destek Al",
      briefLabel: "Bugün Özeti",
      briefTitle: "Bugün dengeli görünüyor.",
      briefText: "3 odak görevi, 2 alışkanlık ve daha hafif bir akşam yemeği hedefi.",
      work: "İş",
      workMetric: "Derin çalışma hazır",
      routine: "Rutin",
      routineMetric: "Seri korundu",
      nutrition: "Beslenme",
      nutritionMetric: "Protein ve su hedefleri yolunda.",
      focus: "Odak",
      water: "Su",
      sleep: "Uyku",
      habits: "Alışkanlıklar",
      habitsMetric: "5 tamam",
      featuresTitle: "İş, alışkanlıklar ve sağlık tek günlük planı takip eder.",
      workTitle: "İş planlama",
      workText: "Görevler, odak blokları ve AI önerileri tek net iş görünümünde bağlı kalır.",
      routineTitle: "Alışkanlıklar ve rutinler",
      routineText: "Tekrarlanan rutinler, alışkanlık kontrolleri ve ilerleme serileri uygulamayla aynı akışı kullanır.",
      nutritionTitle: "Öğün ve vücut takibi",
      nutritionText: "Öğün kaydı, su, uyku ve AI öğün taramaları kaydetmeden önce okunabilir kalır.",
      widgetsTitle: "Planınız uygulama dışında da görünür kalır.",
      widgetsText: "Premium widget'lar Daily Planner'ı yansıtır: iş mavi, rutinler mor, beslenme teal ve ödül anları sıcak altın.",
      privacyEyebrow: "Gizlilik odaklı",
      privacyTitle: "Kişisel veriler mümkün olduğunca yerel kalır.",
      privacyText: "Daily Planner: Work Habits kişisel bir planlama uygulamasıdır; bu yüzden gizlilik önemlidir. Çoğu uygulama verisi cihazınızda saklanır, satın alımları Apple yönetir ve isteğe bağlı izinler yalnızca etkinleştirdiğiniz özellikler için kullanılır."
    },
    privacy: {
      title: "Kişisel planlama verileri odaklı bir tasarımı hak eder.",
      updated: "Son güncelleme: 15 Mayıs 2026",
      overviewLabel: "Genel bakış",
      overviewTitle: "Mümkün olduğunda yerel",
      overviewText: "Daily Planner: Work Habits; kişisel verilerinizi mümkün olduğunca cihazınızda tutmak için tasarlanmış bir üretkenlik, alışkanlık, beslenme ve widget uygulamasıdır.",
      dataLabel: "Oluşturduğunuz veriler",
      dataTitle: "Günlük kayıtlarınız",
      dataText: "Uygulama görevleri, alışkanlıkları, rutinleri, beslenme kayıtlarını, su kayıtlarını, uyku girişlerini, profil ayarlarını, uygulama tercihlerini ve widget ayarlarını cihazınızda yerel olarak saklayabilir.",
      permissionsLabel: "İzinler",
      permissionsTitle: "İsteğe bağlı erişim",
      permissionsText: "Daily Planner: Work Habits bildirimler, takvim, anımsatıcılar, HealthKit, kamera ve fotoğraf arşivi erişimi isteyebilir. Bu izinler yalnızca kullanmayı seçtiğiniz özellikler için kullanılır.",
      aiLabel: "AI özellikleri",
      aiTitle: "İstekler bağlam gerektirir",
      aiText: "AI sohbeti, öneriler veya öğün fotoğrafı tarama kullanırsanız, istek için gereken metin, uygulama bağlamı veya seçili görsel AI servis sağlayıcısına gönderilebilir.",
      healthLabel: "Sağlık ve beslenme",
      healthTitle: "Takip içindir, tıbbi tavsiye değildir",
      healthText: "Beslenme ve AI öğün tarama sonuçları yalnızca kişisel takip için tahmindir. Sağlık verisi erişimi isteğe bağlıdır ve iOS Ayarları'ndan yönetilebilir.",
      subscriptionsLabel: "Abonelikler",
      subscriptionsTitle: "Satın alımları Apple yönetir",
      subscriptionsText: "Satın alımlar ve abonelikler App Store üzerinden Apple tarafından işlenir. Daily Planner: Work Habits tam ödeme kartı bilgilerinizi almaz veya saklamaz.",
      exportLabel: "Dışa aktarma ve silme",
      exportTitle: "Uygulama verilerini kontrol edin",
      exportText: "Uygulama içi araçların bulunduğu yerlerde verileri dışa aktarabilir veya kaldırabilirsiniz; ayrıca uygulamayı cihazınızdan silerek yerel verileri kaldırabilirsiniz. Apple tarafından yönetilen bazı satın alma kayıtları Apple ID'niz üzerinden erişilebilir kalabilir.",
      contactLabel: "İletişim",
      contactTitle: "Gizlilik soruları",
      contactText: "E-posta"
    },
    support: {
      title: "Daily Planner kurulumunuz için yardım.",
      lede: "Widget'lar, abonelikler, AI öğün taramaları, veriler veya hesap ayarları hakkındaki sorular buradan başlayabilir.",
      contactLabel: "İletişim",
      contactTitle: "E-posta desteği",
      contactText: "Bize buradan ulaşın:",
      subscriptionsLabel: "Abonelikler",
      subscriptionsTitle: "Faturalandırmayı Apple yönetir",
      subscriptionsText: "Abonelikler, iadeler ve satın alma geçmişi Apple ID'niz ve App Store hesap ayarlarınız üzerinden yönetilir.",
      privacyLabel: "Gizlilik ve veri",
      privacyTitle: "Yerel öncelikli kayıtlar",
      privacyText: "Daily Planner: Work Habits çoğu uygulama verisini yerel olarak saklar. Yerel uygulama verilerini uygulamayı silerek veya mevcutsa dışa aktarma ve geri yükleme araçlarını kullanarak kaldırabilirsiniz.",
      aiLabel: "AI ve beslenme",
      aiTitle: "Tahminleri gözden geçirin",
      aiText: "AI yanıtları ve öğün tarama sonuçları tahmindir. Kaydetmeden önce sonuçları gözden geçirin ve bunları tıbbi tavsiye olarak kullanmayın."
    },
    terms: {
      title: "Daily Planner: Work Habits Apple'ın Standart EULA'sını kullanır.",
      lede: "Uygulama, App Store uygulamaları için Apple'ın standart lisans şartlarını izler.",
      openEula: "Apple Standart EULA'yı Aç",
      licenseLabel: "Lisans",
      licenseTitle: "Standart App Store şartları",
      licenseText: "Daily Planner: Work Habits, uygulama kullanım şartları için Apple'ın Standart Son Kullanıcı Lisans Sözleşmesi'ni kullanır.",
      purchasesLabel: "Satın alımlar",
      purchasesTitle: "Apple hesap ayarları",
      purchasesText: "Abonelikler ve satın alma yönetimi Apple ID'niz ve App Store ayarlarınız üzerinden yapılır.",
      questionsTitle: "Sorular",
      questionsText: "Ürün veya faturalandırma desteği için iletişim:"
    }
  },
  de: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits ist ein KI-Lebensplaner für Aufgaben, Gewohnheiten, Ernährung, Routinen und Premium-iOS-Widgets.",
      privacyTitle: "Daily Planner: Work Habits Datenschutzrichtlinie",
      supportTitle: "Daily Planner: Work Habits Support",
      termsTitle: "Daily Planner: Work Habits Nutzungsbedingungen"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Funktionen",
      widgets: "Widgets",
      privacy: "Datenschutz",
      privacyPolicy: "Datenschutzrichtlinie",
      support: "Support",
      terms: "Nutzungsbedingungen",
      termsShort: "Bedingungen"
    },
    home: {
      eyebrow: "KI-Tagesplaner für iPhone",
      title: "Daily Planner: Work Habits",
      lede: "Eine fokussierte tägliche Zentrale für Aufgaben, Routinen, Mahlzeiten, Wasser, Schlaf, KI-Hilfe und Premium-iPhone-Widgets.",
      seeWidgets: "Widgets ansehen",
      getSupport: "Support erhalten",
      briefLabel: "Tagesbriefing",
      briefTitle: "Heute wirkt ausgewogen.",
      briefText: "3 Fokusaufgaben, 2 Gewohnheiten und ein leichteres Abendziel.",
      work: "Arbeit",
      workMetric: "Fokusarbeit bereit",
      routine: "Routine",
      routineMetric: "Serie geschützt",
      nutrition: "Ernährung",
      nutritionMetric: "Protein- und Wasserziele liegen im Plan.",
      focus: "Fokus",
      water: "Wasser",
      sleep: "Schlaf",
      habits: "Gewohnheiten",
      habitsMetric: "5 erledigt",
      featuresTitle: "Arbeit, Gewohnheiten und Gesundheit folgen einem Tagesplan.",
      workTitle: "Arbeitsplanung",
      workText: "Aufgaben, Fokusblöcke und KI-Vorschläge bleiben in einer klaren Arbeitsansicht verbunden.",
      routineTitle: "Gewohnheiten und Routinen",
      routineText: "Wiederkehrende Routinen, Gewohnheitschecks und Fortschrittsserien nutzen denselben Ablauf wie die App.",
      nutritionTitle: "Mahlzeiten und Körpertracking",
      nutritionText: "Mahlzeiten, Wasser, Schlaf und KI-Mahlzeitenscans bleiben vor dem Speichern gut lesbar.",
      widgetsTitle: "Ihr Plan bleibt auch außerhalb der App sichtbar.",
      widgetsText: "Premium-Widgets spiegeln Daily Planner wider: Arbeit in Blau, Routinen in Lila, Ernährung in Teal und Belohnungsmomente in warmem Gold.",
      privacyEyebrow: "Datenschutzbewusst",
      privacyTitle: "Persönliche Daten bleiben möglichst lokal.",
      privacyText: "Daily Planner: Work Habits ist eine persönliche Planungs-App, daher ist Datenschutz wichtig. Die meisten App-Daten werden auf Ihrem Gerät gespeichert, Apple verarbeitet Käufe und optionale Berechtigungen werden nur für aktivierte Funktionen genutzt."
    },
    privacy: {
      title: "Persönliche Planungsdaten verdienen ein fokussiertes Design.",
      updated: "Zuletzt aktualisiert: 15. Mai 2026",
      overviewLabel: "Überblick",
      overviewTitle: "Lokal, wann immer möglich",
      overviewText: "Daily Planner: Work Habits ist eine Produktivitäts-, Gewohnheits-, Ernährungs- und Widget-App, die Ihre persönlichen Daten möglichst auf Ihrem Gerät hält.",
      dataLabel: "Von Ihnen erstellte Daten",
      dataTitle: "Ihre täglichen Einträge",
      dataText: "Die App kann Aufgaben, Gewohnheiten, Routinen, Ernährungsprotokolle, Wasserprotokolle, Schlafeinträge, Profileinstellungen, App-Einstellungen und Widget-Einstellungen lokal auf Ihrem Gerät speichern.",
      permissionsLabel: "Berechtigungen",
      permissionsTitle: "Optionaler Zugriff",
      permissionsText: "Daily Planner: Work Habits kann Zugriff auf Mitteilungen, Kalender, Erinnerungen, HealthKit, Kamera und Fotomediathek anfragen. Diese Berechtigungen werden nur für Funktionen verwendet, die Sie nutzen möchten.",
      aiLabel: "KI-Funktionen",
      aiTitle: "Anfragen brauchen Kontext",
      aiText: "Wenn Sie KI-Chat, Vorschläge oder Mahlzeitenfoto-Scans nutzen, können der benötigte Text, App-Kontext oder das ausgewählte Bild an den KI-Dienstanbieter gesendet werden.",
      healthLabel: "Gesundheit und Ernährung",
      healthTitle: "Tracking, keine medizinische Beratung",
      healthText: "Ernährungs- und KI-Mahlzeitenscan-Ergebnisse sind Schätzungen für persönliches Tracking. Zugriff auf Gesundheitsdaten ist optional und kann in den iOS-Einstellungen verwaltet werden.",
      subscriptionsLabel: "Abonnements",
      subscriptionsTitle: "Apple verarbeitet Käufe",
      subscriptionsText: "Käufe und Abonnements werden über den App Store von Apple verarbeitet. Daily Planner: Work Habits erhält oder speichert Ihre vollständigen Zahlungskartendaten nicht.",
      exportLabel: "Export und Löschung",
      exportTitle: "App-Daten steuern",
      exportText: "Sie können App-Daten über verfügbare In-App-Tools exportieren oder entfernen oder die App von Ihrem Gerät löschen. Einige von Apple verwaltete Kaufdaten können über Ihre Apple-ID verfügbar bleiben.",
      contactLabel: "Kontakt",
      contactTitle: "Datenschutzfragen",
      contactText: "E-Mail"
    },
    support: {
      title: "Hilfe für Ihre Daily Planner Einrichtung.",
      lede: "Fragen zu Widgets, Abonnements, KI-Mahlzeitenscans, Daten oder Kontoeinstellungen können hier beginnen.",
      contactLabel: "Kontakt",
      contactTitle: "E-Mail-Support",
      contactText: "Erreichen Sie uns unter",
      subscriptionsLabel: "Abonnements",
      subscriptionsTitle: "Apple verwaltet die Abrechnung",
      subscriptionsText: "Abonnements, Rückerstattungen und Kaufhistorie werden über Ihre Apple-ID und die App-Store-Kontoeinstellungen verwaltet.",
      privacyLabel: "Datenschutz und Daten",
      privacyTitle: "Lokale Einträge zuerst",
      privacyText: "Daily Planner: Work Habits speichert die meisten App-Daten lokal. Sie können lokale App-Daten durch Löschen der App entfernen oder verfügbare Export- und Wiederherstellungstools nutzen.",
      aiLabel: "KI und Ernährung",
      aiTitle: "Schätzungen prüfen",
      aiText: "KI-Antworten und Mahlzeitenscan-Ergebnisse sind Schätzungen. Prüfen Sie Ergebnisse vor dem Speichern und verlassen Sie sich nicht auf sie als medizinische Beratung."
    },
    terms: {
      title: "Daily Planner: Work Habits verwendet Apples Standard-EULA.",
      lede: "Die App folgt Apples Standard-Lizenzbedingungen für App-Store-Apps.",
      openEula: "Apples Standard-EULA öffnen",
      licenseLabel: "Lizenz",
      licenseTitle: "Standardbedingungen des App Store",
      licenseText: "Daily Planner: Work Habits verwendet Apples Standard-Endbenutzer-Lizenzvertrag für App-Nutzungsbedingungen.",
      purchasesLabel: "Käufe",
      purchasesTitle: "Apple-Kontoeinstellungen",
      purchasesText: "Abonnements und Kaufverwaltung erfolgen über Ihre Apple-ID und die App-Store-Einstellungen.",
      questionsTitle: "Fragen",
      questionsText: "Für Produkt- oder Abrechnungssupport kontaktieren Sie"
    }
  },
  es: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits es un planificador de vida con IA para tareas, hábitos, nutrición, rutinas y widgets premium de iOS.",
      privacyTitle: "Política de privacidad de Daily Planner: Work Habits",
      supportTitle: "Soporte de Daily Planner: Work Habits",
      termsTitle: "Términos de uso de Daily Planner: Work Habits"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Funciones",
      widgets: "Widgets",
      privacy: "Privacidad",
      privacyPolicy: "Política de privacidad",
      support: "Soporte",
      terms: "Términos de uso",
      termsShort: "Términos"
    },
    home: {
      eyebrow: "Planificador diario con IA para iPhone",
      title: "Daily Planner: Work Habits",
      lede: "Un centro diario enfocado para tareas, rutinas, comidas, agua, sueño, guía de IA y widgets premium de iPhone.",
      seeWidgets: "Ver widgets",
      getSupport: "Obtener soporte",
      briefLabel: "Resumen de hoy",
      briefTitle: "Hoy se ve equilibrado.",
      briefText: "3 tareas de enfoque, 2 hábitos y una meta de cena más ligera.",
      work: "Trabajo",
      workMetric: "Trabajo profundo listo",
      routine: "Rutina",
      routineMetric: "Racha protegida",
      nutrition: "Nutrición",
      nutritionMetric: "Los objetivos de proteína y agua van por buen camino.",
      focus: "Enfoque",
      water: "Agua",
      sleep: "Sueño",
      habits: "Hábitos",
      habitsMetric: "5 hechos",
      featuresTitle: "Trabajo, hábitos y salud siguen un solo plan diario.",
      workTitle: "Planificación de trabajo",
      workText: "Tareas, bloques de enfoque y sugerencias de IA permanecen conectados en una vista clara de trabajo.",
      routineTitle: "Hábitos y rutinas",
      routineText: "Rutinas recurrentes, controles de hábitos y rachas de progreso usan el mismo flujo de la app.",
      nutritionTitle: "Comidas y seguimiento corporal",
      nutritionText: "Registro de comidas, agua, sueño y escaneos de comidas con IA se mantienen legibles antes de guardar.",
      widgetsTitle: "Tu plan sigue visible fuera de la app.",
      widgetsText: "Los widgets premium reflejan Daily Planner: trabajo en azul, rutinas en morado, nutrición en teal y momentos de recompensa en dorado cálido.",
      privacyEyebrow: "Con privacidad",
      privacyTitle: "Los datos personales permanecen locales siempre que sea posible.",
      privacyText: "Daily Planner: Work Habits es una app de planificación personal, por eso la privacidad importa. La mayoría de los datos se guardan en tu dispositivo, Apple procesa las compras y los permisos opcionales solo se usan para funciones que activas."
    },
    privacy: {
      title: "Los datos de planificación personal merecen un diseño enfocado.",
      updated: "Última actualización: 15 de mayo de 2026",
      overviewLabel: "Resumen",
      overviewTitle: "Local siempre que sea posible",
      overviewText: "Daily Planner: Work Habits es una app de productividad, hábitos, nutrición y widgets diseñada para mantener tus datos personales en tu dispositivo siempre que sea posible.",
      dataLabel: "Datos que creas",
      dataTitle: "Tus registros diarios",
      dataText: "La app puede almacenar tareas, hábitos, rutinas, registros de nutrición, agua, sueño, ajustes de perfil, preferencias de app y ajustes de widgets localmente en tu dispositivo.",
      permissionsLabel: "Permisos",
      permissionsTitle: "Acceso opcional",
      permissionsText: "Daily Planner: Work Habits puede pedir acceso a notificaciones, calendario, recordatorios, HealthKit, cámara y biblioteca de fotos. Estos permisos solo se usan para funciones que eliges usar.",
      aiLabel: "Funciones de IA",
      aiTitle: "Las solicitudes necesitan contexto",
      aiText: "Si usas chat de IA, sugerencias o escaneo de fotos de comidas, el texto, contexto de la app o imagen seleccionada necesarios para esa solicitud pueden enviarse al proveedor de IA.",
      healthLabel: "Salud y nutrición",
      healthTitle: "Seguimiento, no consejo médico",
      healthText: "Los resultados de nutrición y escaneo de comidas con IA son estimaciones para seguimiento personal. El acceso a datos de salud es opcional y puede gestionarse en Ajustes de iOS.",
      subscriptionsLabel: "Suscripciones",
      subscriptionsTitle: "Apple procesa las compras",
      subscriptionsText: "Las compras y suscripciones se procesan por Apple a través del App Store. Daily Planner: Work Habits no recibe ni almacena los datos completos de tu tarjeta.",
      exportLabel: "Exportación y eliminación",
      exportTitle: "Controla los datos de la app",
      exportText: "Puedes exportar o eliminar datos usando herramientas dentro de la app cuando estén disponibles, o eliminando la app de tu dispositivo. Algunos registros de compra gestionados por Apple pueden seguir disponibles en tu Apple ID.",
      contactLabel: "Contacto",
      contactTitle: "Preguntas de privacidad",
      contactText: "Correo"
    },
    support: {
      title: "Ayuda para configurar Daily Planner.",
      lede: "Las preguntas sobre widgets, suscripciones, escaneos de comidas con IA, datos o ajustes de cuenta pueden empezar aquí.",
      contactLabel: "Contacto",
      contactTitle: "Soporte por correo",
      contactText: "Escríbenos a",
      subscriptionsLabel: "Suscripciones",
      subscriptionsTitle: "Apple gestiona la facturación",
      subscriptionsText: "Las suscripciones, reembolsos e historial de compras se gestionan mediante tu Apple ID y los ajustes de cuenta del App Store.",
      privacyLabel: "Privacidad y datos",
      privacyTitle: "Registros locales primero",
      privacyText: "Daily Planner: Work Habits guarda la mayoría de los datos localmente. Puedes eliminar datos locales borrando la app o usando herramientas de exportación y restauración cuando estén disponibles.",
      aiLabel: "IA y nutrición",
      aiTitle: "Revisa las estimaciones",
      aiText: "Las respuestas de IA y los resultados de escaneo de comidas son estimaciones. Revisa los resultados antes de guardarlos y no los uses como consejo médico."
    },
    terms: {
      title: "Daily Planner: Work Habits usa la EULA estándar de Apple.",
      lede: "La app sigue los términos de licencia estándar de Apple para apps del App Store.",
      openEula: "Abrir la EULA estándar de Apple",
      licenseLabel: "Licencia",
      licenseTitle: "Términos estándar del App Store",
      licenseText: "Daily Planner: Work Habits usa el Acuerdo de Licencia de Usuario Final estándar de Apple para los términos de uso de la app.",
      purchasesLabel: "Compras",
      purchasesTitle: "Ajustes de cuenta de Apple",
      purchasesText: "Las suscripciones y la gestión de compras se manejan mediante tu Apple ID y los ajustes del App Store.",
      questionsTitle: "Preguntas",
      questionsText: "Para soporte de producto o facturación, contacta"
    }
  },
  fr: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits est un planificateur de vie avec IA pour les tâches, habitudes, nutrition, routines et widgets iOS premium.",
      privacyTitle: "Politique de confidentialité de Daily Planner: Work Habits",
      supportTitle: "Assistance Daily Planner: Work Habits",
      termsTitle: "Conditions d'utilisation de Daily Planner: Work Habits"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Fonctionnalités",
      widgets: "Widgets",
      privacy: "Confidentialité",
      privacyPolicy: "Politique de confidentialité",
      support: "Assistance",
      terms: "Conditions d'utilisation",
      termsShort: "Conditions"
    },
    home: {
      eyebrow: "Planificateur quotidien IA pour iPhone",
      title: "Daily Planner: Work Habits",
      lede: "Un centre quotidien ciblé pour tâches, routines, repas, eau, sommeil, aide IA et widgets iPhone premium.",
      seeWidgets: "Voir les widgets",
      getSupport: "Obtenir de l'aide",
      briefLabel: "Brief du jour",
      briefTitle: "La journée semble équilibrée.",
      briefText: "3 tâches ciblées, 2 habitudes et un objectif de dîner plus léger.",
      work: "Travail",
      workMetric: "Travail profond prêt",
      routine: "Routine",
      routineMetric: "Série protégée",
      nutrition: "Nutrition",
      nutritionMetric: "Les objectifs protéines et eau sont sur la bonne voie.",
      focus: "Focus",
      water: "Eau",
      sleep: "Sommeil",
      habits: "Habitudes",
      habitsMetric: "5 faites",
      featuresTitle: "Travail, habitudes et santé suivent un seul plan quotidien.",
      workTitle: "Planification du travail",
      workText: "Tâches, blocs de concentration et suggestions IA restent connectés dans une vue de travail claire.",
      routineTitle: "Habitudes et routines",
      routineText: "Routines récurrentes, suivis d'habitudes et séries de progression utilisent le même flux que l'app.",
      nutritionTitle: "Repas et suivi corporel",
      nutritionText: "Repas, eau, sommeil et scans de repas IA restent lisibles avant l'enregistrement.",
      widgetsTitle: "Votre plan reste visible hors de l'app.",
      widgetsText: "Les widgets premium reflètent Daily Planner : travail en bleu, routines en violet, nutrition en teal et moments de récompense en or chaud.",
      privacyEyebrow: "Respect de la vie privée",
      privacyTitle: "Les données personnelles restent locales quand c'est possible.",
      privacyText: "Daily Planner: Work Habits est une app de planification personnelle, donc la confidentialité compte. La plupart des données restent sur votre appareil, Apple gère les achats et les autorisations facultatives ne servent qu'aux fonctionnalités activées."
    },
    privacy: {
      title: "Les données de planification personnelle méritent un design ciblé.",
      updated: "Dernière mise à jour : 15 mai 2026",
      overviewLabel: "Aperçu",
      overviewTitle: "Local autant que possible",
      overviewText: "Daily Planner: Work Habits est une app de productivité, habitudes, nutrition et widgets conçue pour garder vos données personnelles sur votre appareil autant que possible.",
      dataLabel: "Données créées",
      dataTitle: "Vos enregistrements quotidiens",
      dataText: "L'app peut stocker localement tâches, habitudes, routines, journaux nutritionnels, eau, sommeil, paramètres de profil, préférences d'app et réglages de widgets.",
      permissionsLabel: "Autorisations",
      permissionsTitle: "Accès facultatif",
      permissionsText: "Daily Planner: Work Habits peut demander l'accès aux notifications, calendrier, rappels, HealthKit, caméra et photothèque. Ces autorisations ne servent qu'aux fonctionnalités que vous choisissez d'utiliser.",
      aiLabel: "Fonctions IA",
      aiTitle: "Les demandes ont besoin de contexte",
      aiText: "Si vous utilisez le chat IA, les suggestions ou le scan de photos de repas, le texte, le contexte de l'app ou l'image sélectionnée nécessaires peuvent être envoyés au fournisseur IA.",
      healthLabel: "Santé et nutrition",
      healthTitle: "Suivi, pas avis médical",
      healthText: "Les résultats de nutrition et de scan de repas IA sont des estimations pour un suivi personnel. L'accès aux données de santé est facultatif et gérable dans les Réglages iOS.",
      subscriptionsLabel: "Abonnements",
      subscriptionsTitle: "Apple gère les achats",
      subscriptionsText: "Les achats et abonnements sont traités par Apple via l'App Store. Daily Planner: Work Habits ne reçoit ni ne stocke les informations complètes de votre carte.",
      exportLabel: "Exportation et suppression",
      exportTitle: "Contrôler les données de l'app",
      exportText: "Vous pouvez exporter ou supprimer les données via les outils intégrés disponibles, ou supprimer l'app de votre appareil. Certains enregistrements d'achat gérés par Apple peuvent rester disponibles via votre Apple ID.",
      contactLabel: "Contact",
      contactTitle: "Questions de confidentialité",
      contactText: "E-mail"
    },
    support: {
      title: "Aide pour votre configuration Daily Planner.",
      lede: "Les questions sur widgets, abonnements, scans de repas IA, données ou réglages de compte peuvent commencer ici.",
      contactLabel: "Contact",
      contactTitle: "Assistance par e-mail",
      contactText: "Contactez-nous à",
      subscriptionsLabel: "Abonnements",
      subscriptionsTitle: "Apple gère la facturation",
      subscriptionsText: "Abonnements, remboursements et historique d'achat sont gérés via votre Apple ID et les réglages de compte App Store.",
      privacyLabel: "Confidentialité et données",
      privacyTitle: "Données locales d'abord",
      privacyText: "Daily Planner: Work Habits stocke la plupart des données localement. Vous pouvez supprimer les données locales en supprimant l'app ou utiliser les outils d'exportation et restauration disponibles.",
      aiLabel: "IA et nutrition",
      aiTitle: "Vérifier les estimations",
      aiText: "Les réponses IA et résultats de scan de repas sont des estimations. Vérifiez les résultats avant de les enregistrer et ne les utilisez pas comme avis médical."
    },
    terms: {
      title: "Daily Planner: Work Habits utilise l'EULA standard d'Apple.",
      lede: "L'app suit les conditions de licence standard d'Apple pour les apps de l'App Store.",
      openEula: "Ouvrir l'EULA standard d'Apple",
      licenseLabel: "Licence",
      licenseTitle: "Conditions standard de l'App Store",
      licenseText: "Daily Planner: Work Habits utilise le contrat de licence utilisateur final standard d'Apple pour les conditions d'utilisation de l'app.",
      purchasesLabel: "Achats",
      purchasesTitle: "Réglages de compte Apple",
      purchasesText: "Les abonnements et la gestion des achats sont traités via votre Apple ID et les réglages App Store.",
      questionsTitle: "Questions",
      questionsText: "Pour l'assistance produit ou facturation, contactez"
    }
  },
  it: {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits è un life planner con IA per attività, abitudini, nutrizione, routine e widget iOS premium.",
      privacyTitle: "Informativa sulla privacy di Daily Planner: Work Habits",
      supportTitle: "Supporto Daily Planner: Work Habits",
      termsTitle: "Termini di utilizzo di Daily Planner: Work Habits"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Funzioni",
      widgets: "Widget",
      privacy: "Privacy",
      privacyPolicy: "Informativa privacy",
      support: "Supporto",
      terms: "Termini di utilizzo",
      termsShort: "Termini"
    },
    home: {
      eyebrow: "Planner giornaliero IA per iPhone",
      title: "Daily Planner: Work Habits",
      lede: "Un centro giornaliero focalizzato per attività, routine, pasti, acqua, sonno, guida IA e widget iPhone premium.",
      seeWidgets: "Vedi widget",
      getSupport: "Ricevi supporto",
      briefLabel: "Brief di oggi",
      briefTitle: "Oggi sembra equilibrato.",
      briefText: "3 attività di focus, 2 abitudini e un obiettivo cena più leggero.",
      work: "Lavoro",
      workMetric: "Focus profondo pronto",
      routine: "Routine",
      routineMetric: "Serie protetta",
      nutrition: "Nutrizione",
      nutritionMetric: "Obiettivi proteine e acqua in linea.",
      focus: "Focus",
      water: "Acqua",
      sleep: "Sonno",
      habits: "Abitudini",
      habitsMetric: "5 completate",
      featuresTitle: "Lavoro, abitudini e salute seguono un unico piano giornaliero.",
      workTitle: "Pianificazione lavoro",
      workText: "Attività, blocchi di focus e suggerimenti IA restano collegati in una vista di lavoro chiara.",
      routineTitle: "Abitudini e routine",
      routineText: "Routine ricorrenti, check-in delle abitudini e serie di progresso usano lo stesso flusso dell'app.",
      nutritionTitle: "Pasti e monitoraggio corpo",
      nutritionText: "Registro pasti, acqua, sonno e scansioni pasti IA restano leggibili prima del salvataggio.",
      widgetsTitle: "Il tuo piano resta visibile fuori dall'app.",
      widgetsText: "I widget premium rispecchiano Daily Planner: lavoro in blu, routine in viola, nutrizione in teal e ricompense in oro caldo.",
      privacyEyebrow: "Attenta alla privacy",
      privacyTitle: "I dati personali restano locali quando possibile.",
      privacyText: "Daily Planner: Work Habits è un'app di pianificazione personale, quindi la privacy conta. La maggior parte dei dati resta sul dispositivo, Apple gestisce gli acquisti e i permessi opzionali servono solo alle funzioni attivate."
    },
    privacy: {
      title: "I dati di pianificazione personale meritano un design focalizzato.",
      updated: "Ultimo aggiornamento: 15 maggio 2026",
      overviewLabel: "Panoramica",
      overviewTitle: "Locale quando possibile",
      overviewText: "Daily Planner: Work Habits è un'app per produttività, abitudini, nutrizione e widget progettata per mantenere i dati personali sul dispositivo quando possibile.",
      dataLabel: "Dati che crei",
      dataTitle: "I tuoi registri giornalieri",
      dataText: "L'app può archiviare localmente attività, abitudini, routine, registri nutrizionali, acqua, sonno, impostazioni profilo, preferenze app e impostazioni widget.",
      permissionsLabel: "Permessi",
      permissionsTitle: "Accesso opzionale",
      permissionsText: "Daily Planner: Work Habits può chiedere accesso a notifiche, calendario, promemoria, HealthKit, fotocamera e libreria foto. Questi permessi sono usati solo per le funzioni che scegli.",
      aiLabel: "Funzioni IA",
      aiTitle: "Le richieste richiedono contesto",
      aiText: "Se usi chat IA, suggerimenti o scansioni foto dei pasti, testo, contesto dell'app o immagine selezionata necessari possono essere inviati al provider IA.",
      healthLabel: "Salute e nutrizione",
      healthTitle: "Monitoraggio, non consiglio medico",
      healthText: "Risultati nutrizionali e scansioni pasti IA sono stime per monitoraggio personale. L'accesso ai dati salute è opzionale e gestibile nelle Impostazioni iOS.",
      subscriptionsLabel: "Abbonamenti",
      subscriptionsTitle: "Apple gestisce gli acquisti",
      subscriptionsText: "Acquisti e abbonamenti sono elaborati da Apple tramite App Store. Daily Planner: Work Habits non riceve né archivia i dati completi della tua carta.",
      exportLabel: "Esportazione ed eliminazione",
      exportTitle: "Controlla i dati dell'app",
      exportText: "Puoi esportare o rimuovere dati tramite strumenti in-app disponibili, oppure eliminando l'app dal dispositivo. Alcuni record di acquisto gestiti da Apple possono restare disponibili tramite Apple ID.",
      contactLabel: "Contatto",
      contactTitle: "Domande privacy",
      contactText: "Email"
    },
    support: {
      title: "Aiuto per configurare Daily Planner.",
      lede: "Domande su widget, abbonamenti, scansioni pasti IA, dati o impostazioni account possono iniziare qui.",
      contactLabel: "Contatto",
      contactTitle: "Supporto email",
      contactText: "Scrivici a",
      subscriptionsLabel: "Abbonamenti",
      subscriptionsTitle: "Apple gestisce la fatturazione",
      subscriptionsText: "Abbonamenti, rimborsi e cronologia acquisti sono gestiti tramite Apple ID e impostazioni account App Store.",
      privacyLabel: "Privacy e dati",
      privacyTitle: "Record locali prima di tutto",
      privacyText: "Daily Planner: Work Habits archivia la maggior parte dei dati localmente. Puoi rimuovere dati locali eliminando l'app o usando strumenti di esportazione e ripristino dove disponibili.",
      aiLabel: "IA e nutrizione",
      aiTitle: "Controlla le stime",
      aiText: "Risposte IA e risultati scansione pasti sono stime. Controlla i risultati prima di salvarli e non usarli come consigli medici."
    },
    terms: {
      title: "Daily Planner: Work Habits usa l'EULA standard di Apple.",
      lede: "L'app segue i termini di licenza standard Apple per le app App Store.",
      openEula: "Apri l'EULA standard Apple",
      licenseLabel: "Licenza",
      licenseTitle: "Termini standard App Store",
      licenseText: "Daily Planner: Work Habits usa il Contratto di licenza con l'utente finale standard di Apple per i termini d'uso dell'app.",
      purchasesLabel: "Acquisti",
      purchasesTitle: "Impostazioni account Apple",
      purchasesText: "Abbonamenti e gestione acquisti sono gestiti tramite Apple ID e impostazioni App Store.",
      questionsTitle: "Domande",
      questionsText: "Per supporto prodotto o fatturazione, contatta"
    }
  },
  "pt-BR": {
    meta: {
      homeTitle: "Daily Planner: Work Habits",
      homeDescription: "Daily Planner: Work Habits é um planejador de vida com IA para tarefas, hábitos, nutrição, rotinas e widgets premium do iOS.",
      privacyTitle: "Política de Privacidade do Daily Planner: Work Habits",
      supportTitle: "Suporte do Daily Planner: Work Habits",
      termsTitle: "Termos de Uso do Daily Planner: Work Habits"
    },
    common: {
      brandShort: "Daily Planner",
      features: "Recursos",
      widgets: "Widgets",
      privacy: "Privacidade",
      privacyPolicy: "Política de Privacidade",
      support: "Suporte",
      terms: "Termos de Uso",
      termsShort: "Termos"
    },
    home: {
      eyebrow: "Planejador diário com IA para iPhone",
      title: "Daily Planner: Work Habits",
      lede: "Um centro diário focado para tarefas, rotinas, refeições, água, sono, orientação de IA e widgets premium do iPhone.",
      seeWidgets: "Ver widgets",
      getSupport: "Obter suporte",
      briefLabel: "Resumo de hoje",
      briefTitle: "Hoje parece equilibrado.",
      briefText: "3 tarefas de foco, 2 hábitos e uma meta de jantar mais leve.",
      work: "Trabalho",
      workMetric: "Trabalho profundo pronto",
      routine: "Rotina",
      routineMetric: "Sequência protegida",
      nutrition: "Nutrição",
      nutritionMetric: "Metas de proteína e água estão no caminho.",
      focus: "Foco",
      water: "Água",
      sleep: "Sono",
      habits: "Hábitos",
      habitsMetric: "5 feitos",
      featuresTitle: "Trabalho, hábitos e saúde seguem um único plano diário.",
      workTitle: "Planejamento de trabalho",
      workText: "Tarefas, blocos de foco e sugestões de IA ficam conectados em uma visão clara de trabalho.",
      routineTitle: "Hábitos e rotinas",
      routineText: "Rotinas recorrentes, check-ins de hábitos e sequências de progresso usam o mesmo fluxo do app.",
      nutritionTitle: "Refeições e acompanhamento corporal",
      nutritionText: "Registro de refeições, água, sono e escaneamentos de refeições com IA permanecem legíveis antes de salvar.",
      widgetsTitle: "Seu plano continua visível fora do app.",
      widgetsText: "Widgets premium refletem o Daily Planner: trabalho em azul, rotinas em roxo, nutrição em teal e recompensas em dourado quente.",
      privacyEyebrow: "Privacidade em foco",
      privacyTitle: "Dados pessoais ficam locais sempre que possível.",
      privacyText: "Daily Planner: Work Habits é um app de planejamento pessoal, então privacidade importa. A maioria dos dados fica no seu dispositivo, a Apple processa compras e permissões opcionais só são usadas para recursos que você ativa."
    },
    privacy: {
      title: "Dados de planejamento pessoal merecem um design focado.",
      updated: "Última atualização: 15 de maio de 2026",
      overviewLabel: "Visão geral",
      overviewTitle: "Local sempre que possível",
      overviewText: "Daily Planner: Work Habits é um app de produtividade, hábitos, nutrição e widgets projetado para manter seus dados pessoais no dispositivo sempre que possível.",
      dataLabel: "Dados que você cria",
      dataTitle: "Seus registros diários",
      dataText: "O app pode armazenar localmente tarefas, hábitos, rotinas, registros de nutrição, água, sono, configurações de perfil, preferências do app e configurações de widgets.",
      permissionsLabel: "Permissões",
      permissionsTitle: "Acesso opcional",
      permissionsText: "Daily Planner: Work Habits pode pedir acesso a notificações, calendário, lembretes, HealthKit, câmera e biblioteca de fotos. Essas permissões são usadas apenas para recursos que você escolhe usar.",
      aiLabel: "Recursos de IA",
      aiTitle: "Solicitações precisam de contexto",
      aiText: "Se você usar chat de IA, sugestões ou escaneamento de foto de refeição, o texto, contexto do app ou imagem selecionada necessários podem ser enviados ao provedor de IA.",
      healthLabel: "Saúde e nutrição",
      healthTitle: "Acompanhamento, não orientação médica",
      healthText: "Resultados de nutrição e escaneamento de refeições com IA são estimativas para acompanhamento pessoal. Acesso a dados de saúde é opcional e pode ser gerenciado nos Ajustes do iOS.",
      subscriptionsLabel: "Assinaturas",
      subscriptionsTitle: "A Apple processa compras",
      subscriptionsText: "Compras e assinaturas são processadas pela Apple via App Store. Daily Planner: Work Habits não recebe nem armazena os dados completos do seu cartão.",
      exportLabel: "Exportação e exclusão",
      exportTitle: "Controle os dados do app",
      exportText: "Você pode exportar ou remover dados usando ferramentas no app quando disponíveis, ou apagando o app do dispositivo. Alguns registros de compra gerenciados pela Apple podem continuar disponíveis pelo seu Apple ID.",
      contactLabel: "Contato",
      contactTitle: "Dúvidas de privacidade",
      contactText: "E-mail"
    },
    support: {
      title: "Ajuda para configurar o Daily Planner.",
      lede: "Perguntas sobre widgets, assinaturas, escaneamentos de refeições com IA, dados ou configurações de conta podem começar aqui.",
      contactLabel: "Contato",
      contactTitle: "Suporte por e-mail",
      contactText: "Fale conosco em",
      subscriptionsLabel: "Assinaturas",
      subscriptionsTitle: "A Apple gerencia a cobrança",
      subscriptionsText: "Assinaturas, reembolsos e histórico de compras são gerenciados pelo seu Apple ID e pelas configurações da conta da App Store.",
      privacyLabel: "Privacidade e dados",
      privacyTitle: "Registros locais primeiro",
      privacyText: "Daily Planner: Work Habits armazena a maioria dos dados localmente. Você pode remover dados locais apagando o app ou usando ferramentas de exportação e restauração quando disponíveis.",
      aiLabel: "IA e nutrição",
      aiTitle: "Revise as estimativas",
      aiText: "Respostas de IA e resultados de escaneamento de refeições são estimativas. Revise os resultados antes de salvar e não os use como orientação médica."
    },
    terms: {
      title: "Daily Planner: Work Habits usa a EULA padrão da Apple.",
      lede: "O app segue os termos de licença padrão da Apple para apps da App Store.",
      openEula: "Abrir a EULA padrão da Apple",
      licenseLabel: "Licença",
      licenseTitle: "Termos padrão da App Store",
      licenseText: "Daily Planner: Work Habits usa o Contrato de Licença de Usuário Final padrão da Apple para os termos de uso do app.",
      purchasesLabel: "Compras",
      purchasesTitle: "Configurações da conta Apple",
      purchasesText: "Assinaturas e gerenciamento de compras são tratados pelo seu Apple ID e pelas configurações da App Store.",
      questionsTitle: "Perguntas",
      questionsText: "Para suporte de produto ou cobrança, entre em contato"
    }
  }
};

const SUPPORTED_LANGUAGES = LANGUAGE_OPTIONS.map((language) => language.code);

const readPath = (source, path) => path.split(".").reduce((value, key) => value?.[key], source);

const translate = (language, path) => (
  readPath(SITE_TRANSLATIONS[language], path) ??
  readPath(SITE_TRANSLATIONS.en, path) ??
  ""
);

const requestedLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  const fromStorage = window.localStorage.getItem("dailyPlannerSiteLanguage");
  return SUPPORTED_LANGUAGES.includes(fromQuery)
    ? fromQuery
    : SUPPORTED_LANGUAGES.includes(fromStorage)
      ? fromStorage
      : "en";
};

const localUrlWithLanguage = (href, language) => {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) {
    return href;
  }

  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }

  return `${url.pathname.split("/").pop() || "index.html"}${url.search}${url.hash}`;
};

const applyLanguage = (language) => {
  const page = document.documentElement.dataset.page || "home";
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(language, element.dataset.i18n);
  });

  const title = translate(language, `meta.${page}Title`);
  if (title) {
    document.title = title;
  }

  const description = document.querySelector('meta[name="description"]');
  const descriptionText = translate(language, `meta.${page}Description`);
  if (description && descriptionText) {
    description.setAttribute("content", descriptionText);
  }

  document.querySelectorAll("[data-language-select]").forEach((select) => {
    select.innerHTML = "";
    select.setAttribute("aria-label", "Language");
    LANGUAGE_OPTIONS.forEach((option) => {
      const item = document.createElement("option");
      item.value = option.code;
      item.textContent = option.label;
      item.selected = option.code === language;
      select.appendChild(item);
    });
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    link.setAttribute("href", localUrlWithLanguage(link.getAttribute("href"), language));
  });
};

const language = requestedLanguage();
applyLanguage(language);

document.querySelectorAll("[data-language-select]").forEach((select) => {
  select.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    window.localStorage.setItem("dailyPlannerSiteLanguage", nextLanguage);

    const url = new URL(window.location.href);
    if (nextLanguage === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", nextLanguage);
    }
    window.location.href = url.toString();
  });
});
