export default function getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date string');
    }
  
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(date);
  }
  