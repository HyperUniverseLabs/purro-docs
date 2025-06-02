export const getStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-500 text-white dark:bg-green-600 dark:text-white';
        case 'in-progress': return 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white';
        case 'planned': return 'bg-yellow-500 text-white dark:bg-yellow-600 dark:text-white';
        case 'future': return 'bg-gray-400 text-white dark:bg-gray-500 dark:text-white';
        default: return 'bg-gray-400 text-white dark:bg-gray-500 dark:text-white';
    }
};

export const getStatusText = (status: string) => {
    switch (status) {
        case 'completed': return 'Completed';
        case 'in-progress': return 'In Progress';
        case 'planned': return 'Planned';
        case 'future': return 'Future';
        default: return 'Unknown';
    }
};

export const getConnectorColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-500 dark:bg-green-600';
        case 'in-progress': return 'bg-blue-500 dark:bg-blue-600';
        case 'planned': return 'bg-yellow-500 dark:bg-yellow-600';
        case 'future': return 'bg-gray-300 dark:bg-gray-600';
        default: return 'bg-gray-300 dark:bg-gray-600';
    }
};

export const getTaskStatusColor = (status: string) => {
    switch (status) {
        case 'completed': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800';
        case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
        case 'planned': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800';
        case 'future': return 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700';
        default: return 'bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-700';
    }
};

export const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'planning': return '📋';
        case 'docs': return '📚';
        case 'design': return '🎨';
        case 'website': return '🌐';
        case 'community': return '👥';
        case 'bot': return '🤖';
        case 'mvp': return '⚡';
        default: return '📝';
    }
};

export const getCategoryName = (category: string) => {
    switch (category) {
        case 'planning': return 'Planning';
        case 'docs': return 'Documentation';
        case 'design': return 'Design';
        case 'website': return 'Website';
        case 'community': return 'Community';
        case 'bot': return 'Bot Development';
        case 'mvp': return 'Core Development';
        default: return 'Other';
    }
};