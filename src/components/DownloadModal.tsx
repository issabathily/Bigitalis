import { Dialog } from '@headlessui/react';
import DownloadForm from './DownloadForm';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  softwareName: string;
  softwareVersion: string;
  downloadUrl: string;
}

export default function DownloadModal({ 
  isOpen, 
  onClose, 
  softwareName, 
  softwareVersion, 
  downloadUrl 
}: DownloadModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />

        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          <DownloadForm
            softwareName={softwareName}
            softwareVersion={softwareVersion}
            downloadUrl={downloadUrl}
            onClose={onClose}
          />
        </div>
      </div>
    </Dialog>
  );
}
