// youtubeVideo.js
import { LightningElement, api } from 'lwc';

export default class YoutubeVideo extends LightningElement {
    @api youtubeUrl;

    // Verifica se a URL fornecida é válida
    get youtubeEmbedUrl() {
        if (this.youtubeUrl) {
            let videoId = this.extractVideoId(this.youtubeUrl);
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return '';
    }

    extractVideoId(url) {
        // Verifica se a URL corresponde a um padrão de URL do YouTube e extrai o ID do vídeo
        let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        let match = url.match(regExp);
        if (match && match[2].length === 11) {
            return match[2];
        } else {
            // Trate a URL inválida conforme necessário
            console.error('URL do YouTube inválida');
            return '';
        }
    }
}
