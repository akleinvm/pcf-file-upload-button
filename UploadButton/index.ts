import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class UploadButton implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private context: ComponentFramework.Context<IInputs>;
    private notifyOutputChanged: () => void;
    private container: HTMLDivElement;
    private button: HTMLButtonElement;
    private fileInput: HTMLInputElement;
    private base64Output: string;
    private fileName: string;

    constructor(){}

    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.context = context;
        this.notifyOutputChanged = notifyOutputChanged;
        this.container = container;
        
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.accept = this.context.parameters.Accept.raw ?? '.txt';
        this.fileInput.addEventListener('change', this.handleFileUpload.bind(this));
        this.container.appendChild(this.fileInput);

        this.button = document.createElement('button');
        this.button.className = 'default-button';
        this.button.innerText = this.context.parameters.Text.raw ?? '';
        this.button.addEventListener('click', () => this.container.getElementsByTagName('input')[0]?.click());
        this.container.appendChild(this.button);

    }

    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        this.context = context;
        this.button.innerText = this.context.parameters.Text.raw ?? '';
        this.fileInput.accept = this.context.parameters.Accept.raw ?? '.txt';
    }

    public getOutputs(): IOutputs
    {
        return {
            FileName: this.fileName,
            FileContent: this.base64Output
        };
    }

    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }

    private handleFileUpload (event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        const filename = file?.name ?? '';
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.fileName = filename;
                this.base64Output = reader.result?.toString() ?? '';
                this.notifyOutputChanged();
            }
            reader.readAsDataURL(file)
        }
    }
}
