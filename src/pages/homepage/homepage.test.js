import { render, screen } from '@testing-library/react';
import Homepage from './homepage';  // Adjust the import path if necessary
import '@testing-library/jest-dom/extend-expect'; // for better assertions

// Mock the imported image and Socials component
jest.mock('../../images/me.png', () => 'me.png');
jest.mock('../../components/Socials', () => () => <div>Socials</div>);

describe('Homepage Component', () => {
  test('renders the name "Hi, I\'m Hoger!"', () => {
    render(<Homepage tagline="Web Developer" />);

    const nameElement = screen.getByText(/Hi, I'm Hoger!/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders the tagline', () => {
    const tagline = "Web Developer";
    render(<Homepage tagline={tagline} />);

    const taglineElement = screen.getByText(tagline);
    expect(taglineElement).toBeInTheDocument();
  });

  test('renders the hero image', () => {
    render(<Homepage tagline="Web Developer" />);

    const imageElement = screen.getByAltText('');  // Since the alt text is empty in your component
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass('heroimage');
  });

  test('renders the Socials component', () => {
    render(<Homepage tagline="Web Developer" />);

    const socialsElement = screen.getByText('Socials');
    expect(socialsElement).toBeInTheDocument();
  });
});
