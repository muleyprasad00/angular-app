
    export interface UserConfig {
        userName: string;
        country: string;
    }

    export interface HeaderConfig {
        title: string;
    }

    export interface SidebarConfig {
        title: string;
        url: string;
    }

    export interface FooterConfig {
        copyright: string;
    }

    export interface GridButton {
        title: string;
        action: string;
        url: string;
        class: string;
        type: string;
    }

    export interface ButtonDetails {
        btnText: string;
        btnClass: string;
    }

    export interface Column {
        field: string;
        title: string;
        type: string;
        buttonDetails: ButtonDetails;
    }

    export interface BookingConfig {
        apiUrl: string;
        breadcrumbList: string[];
        gridButtons: GridButton[];
        columns: Column[];
    }

    export interface Translations {
        appName: string;
        dashboard: string;
        profile: string;
        booking: string;
        users: string;
        copyright: string;
    }

    export interface I18n {
        locale: string;
        translations: Translations;
    }

    export interface Users {
        appName: string;
        userConfig: UserConfig;
        headerConfig: HeaderConfig;
        sidebarConfig: SidebarConfig[];
        footerConfig: FooterConfig;
        bookingConfig: BookingConfig;
        i18n: I18n[];
    }



