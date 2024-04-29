import { useLocalStorage } from './useLocalStorage';

type LocalStorageMock = {
  setItem: jest.MockedFunction<(key: string, value: string) => void>;
  getItem: jest.MockedFunction<(key: string) => string | null>;
  removeItem: jest.MockedFunction<(key: string) => void>;
};

describe('useLocalStorage', () => {
  let mockLocalStorage: LocalStorageMock;

  beforeEach(() => {
    mockLocalStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
    };

    global.localStorage = mockLocalStorage as unknown as Storage;
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('setItem', () => {
    it('sets item to localStorage', () => {
      const { setItem } = useLocalStorage('testKey');
      setItem('testValue');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('testValue'));
    });

    it('handles exceptions', () => {
      mockLocalStorage.setItem.mockImplementation(() => {
        throw new Error();
      });
      const { setItem } = useLocalStorage('testKey');
      try {
        setItem('testValue');
      } catch (error) {
        expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
          'testKey',
          JSON.stringify('testValue')
        );
      }
    });
  });

  describe('getItem', () => {
    it('gets item from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify('testValue'));
      const { getItem } = useLocalStorage('testKey');
      const value = getItem();
      expect(value).toEqual('testValue');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('testKey');
    });

    it('returns undefined when getting non-existing item from localStorage', () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      const { getItem } = useLocalStorage('testKey');
      const result = getItem();
      expect(result).toBeUndefined();
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('testKey');
    });

    it('handles exceptions', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error();
      });
      const { getItem } = useLocalStorage('testKey');
      try {
        getItem();
      } catch (error) {
        expect(mockLocalStorage.getItem).toHaveBeenCalledWith('testKey');
      }
    });
  });

  describe('removeItem', () => {
    it('removes item from localStorage', () => {
      const { removeItem } = useLocalStorage('testKey');
      removeItem();
      expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('testKey');
    });

    it('handles exceptions', () => {
      mockLocalStorage.removeItem.mockImplementation(() => {
        throw new Error();
      });
      const { removeItem } = useLocalStorage('testKey');
      try {
        removeItem();
      } catch (error) {
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('testKey');
      }
    });
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });
});
