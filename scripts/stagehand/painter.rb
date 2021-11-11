class String
  def red;     "\033[31m#{self}\033[0m" end # for errors
  def green;   "\033[32m#{self}\033[0m" end # for success
  def blue;    "\033[34m#{self}\033[0m" end # for info
  def magenta; "\033[35m#{self}\033[0m" end # for process
end
